


# Write your own AppID - ex : devGupta123
appId='devGupta123'
echo $appId

# Remove keystore & json if exists
rm ./$appId.keystore
rm -rf ./fingerprintData


keystore="$appId.keystore"
alias="alias-$appId"
keyPassword=$appId
storePassword=$appId

# Specify the folder name to save fingerprints
folder_name="fingerprintData"
# Create the folder if it doesn't exist
mkdir -p "$folder_name"




keytool -genkey -noprompt -keystore $keystore -alias $alias -keyalg RSA -storePass $storePassword  -dname "CN=$fullName, OU=$organizationUnit, O=$organizationName, L=$cityOrLocality, S=$stateOrProvince, C=$countryCode" -validity 360000


# Check if keystore generation was successful
if [ $? -eq 0 ]; then
  # Get SHA-256 and SHA-1 fingerprints separately
  SHA1=$(keytool -list -v -keystore ./$appId.keystore -alias alias-$appId -storepass $appId -keypass android | grep -o 'SHA1: [0-9A-F:]*' | cut -d ' ' -f 2)
  SHA256=$(keytool -list -v -keystore ./$appId.keystore -alias alias-$appId -storepass $appId -keypass android | grep -o 'SHA256: [0-9A-F:]*' | cut -d ' ' -f 2)
  keyHashes=$(keytool -exportcert -keystore ./$appId.keystore -alias alias-$appId -storepass $appId -keypass android | openssl sha1 -binary | openssl base64 | grep -oE '[A-Za-z0-9+/]+=')
  
  # Create a JSON object with separate SHA-256 and SHA-1 values
  FINGERPRINTS_JSON="{ \"SHA1\": \"$SHA1\", \"SHA256\": \"$SHA256\", \"keyHashes\": \"$keyHashes\" }"

  # Output the JSON object to fingerprints.json
  echo "$FINGERPRINTS_JSON" > $folder_name/fingerprints.json
else
  echo "Keystore generation failed. Check the parameters and try again."
fi
