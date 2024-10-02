iOS Setup Needed for React-native-vector-icons
To use the bundled icons on iOS, perform the following step:

run npx pod-install in the iOS directory

Edit Info.plist and add a property called Fonts provided by application (or UIAppFonts if Xcode autocomplete is not working):

List of all available fonts to copy & paste in Info.plist
<key>UIAppFonts</key>
<array>
  <string>AntDesign.ttf</string>
  <string>Entypo.ttf</string>
  <string>EvilIcons.ttf</string>
  <string>Feather.ttf</string>
  <string>FontAwesome.ttf</string>
  <string>FontAwesome5_Brands.ttf</string>
  <string>FontAwesome5_Regular.ttf</string>
  <string>FontAwesome5_Solid.ttf</string>
  <string>FontAwesome6_Brands.ttf</string>
  <string>FontAwesome6_Regular.ttf</string>
  <string>FontAwesome6_Solid.ttf</string>
  <string>Foundation.ttf</string>
  <string>Ionicons.ttf</string>
  <string>MaterialIcons.ttf</string>
  <string>MaterialCommunityIcons.ttf</string>
  <string>SimpleLineIcons.ttf</string>
  <string>Octicons.ttf</string>
  <string>Zocial.ttf</string>
  <string>Fontisto.ttf</string>
</array>
Above step might look something like this:

XCode screenshot

Note: Recompile your project after adding or removing fonts.
