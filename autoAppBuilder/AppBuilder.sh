
echo $@


######### Command Line Parameters Parsing Starting ###################
POSITIONAL_ARGS=()

while [[ $# -gt 0 ]]; do
  case $1 in
    --appName)
      appName="$2"
      shift # past argument
      shift # past value
      ;;
    --packageName)
      packageName="$2"
      shift # past argument
      shift # past value
      ;;
    --prodBuild)
      prodBuild="$2"
      shift # past argument
      shift # past value
      ;;
    --2)
      2="$2"
      shift # past argument
      shift # past value
      ;;
    --default)
      DEFAULT=YES
      shift # past argument
      ;;
    -*|--*)
      echo "Unknown option $1"
      exit 1
      ;;
    *)
      POSITIONAL_ARGS+=("$1") # save positional arg
      shift # past argument
      ;;
  esac
done

set -- "${POSITIONAL_ARGS[@]}" # restore positional parameters


packageLocation=${2//.//}
prodBuild=false
echo "packageLocation:::::${packageLocation}"
echo "2:::::${2}"




# Initilize Project Base/path
if [[ "$OSTYPE" == "darwin"* ]]; then
  projectBase="./"
else
  projectBase="/AAB/DaVinchiRN/"
fi

cd $projectBase




# Delete files -------------------------->
rm -rf ${projectBase}android/app/src/main/res/m*/



# Setting-Up app icon -------------------------->
echo "App icon updating::::" && \
yarn add -D react-native-icon-generator && \
npx react-native-icon-generator ProFocus_412.png --platform=android && \
cp -r ${projectBase}/output/icons/* "${projectBase}android/app/src/main/res/" && \
yarn remove react-native-icon-generator



# Call script2.sh
echo "Current working directory: $(pwd)"
# source "${projectBase}autoAppBuilder/lib/generateKeystore.sh"
# /Users/dev/proWorkSpace/pro-focus-app/devGupta123.keystore
# cp "${projectBase}/devGupta123.keystore" "${projectBase}android/app/"


# if [ -e ./android/app/src/main/java/$packageLocation/newarchitecture/MainApplicationReactNativeHost.java ]
# then
#   echo "newarchitecture exists"
# else
#   echo "newarchitecture don't exist, creating it manually"
#     if [[ "$OSTYPE" == "darwin"* ]]; then
#       cp -r AAB/myapp/newarchitecture/ ${projectBase}android/app/src/main/java/$packageLocation/ && \
#       sed -i "" "s/com.mycompany.myapp/$2/g" ${projectBase}android/app/src/main/java/$packageLocation/newarchitecture/MainApplicationReactNativeHost.java && \
#       sed -i "" "s/com.mycompany.myapp/$2/g" ${projectBase}android/app/src/main/java/$packageLocation/newarchitecture/components/MainComponentsRegistry.java && \
#       sed -i "" "s/com.mycompany.myapp/$2/g" ${projectBase}android/app/src/main/java/$packageLocation/newarchitecture/modules/MainApplicationTurboModuleManagerDelegate.java
#       if [ $? -eq 0 ]; then
#         echo OK
#       else
#         exit 1
#       fi

#     else
#       cp -r myapp/newarchitecture/ ${projectBase}android/app/src/main/java/$packageLocation/ && \
#       sed -i "s/com.mycompany.myapp/$2/g" ${projectBase}android/app/src/main/java/$packageLocation/newarchitecture/MainApplicationReactNativeHost.java && \
#       sed -i "s/com.mycompany.myapp/$2/g" ${projectBase}android/app/src/main/java/$packageLocation/newarchitecture/components/MainComponentsRegistry.java && \
#       sed -i "s/com.mycompany.myapp/$2/g" ${projectBase}android/app/src/main/java/$packageLocation/newarchitecture/modules/MainApplicationTurboModuleManagerDelegate.java
#       if [ $? -eq 0 ]; then
#         echo OK
#       else
#         exit 1
#       fi
#     fi

# fi



# Stop gradle demon and run cleaning process
# if [ $? -eq 0 ]; then
#   cd android && \
#   ./gradlew --stop && \
#   ./gradlew clean && \
#   cd .. && \
#   echo "./gradlew cleaning Done::::>>>>"
# else
#   echo "./gradlew cleaning Erorr::::>>>>"
# fi


# Start Buld Apk/AAB
if [ "$prodBuild" = "true" ]; then
#   yarn run release-build-aab && \
#   git restore .
  yarn
else
 adb devices && \
 yarn && \
 yarn make-apk-release
#   yarn run release-build-apk-release && \
#   git restore .
fi