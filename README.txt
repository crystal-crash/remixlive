how to use:

depends node.js and npm
https://nodejs.org/en

in the program top dir:

npm install
npm audit fix
npm run start-local (it will prolly fail!)
(if it fails:)
cd ./node_modules/electron/dist
sudo chown root ./chrome-sandbox
sudo chmod 4755 ./chrome-sandbox
cd ../../..
npm run start-local (it should work now!)

this should open a program window titled 'remixlive' and a browser tab for the control panel
if it prompts for un/pw, enter 'sleep' and 'sleep'

to run with 9 stream spaces, use:
npm run start-local

to run with 16 stream spaces, use:
npm run start-local -- --config="remix.toml"

for summary of config options run
npm start -- --help

for long-term use, recommended to write your own config file. to use your config file:
npm start -- --config="whatever.toml"
see example.config.toml for an example.

can also load stream data from json apis and toml files. data sources can be specificed in config file - see example.config.toml - or on the command line:
npm start -- --data.json.url="https://you/api/streams.json" --data.toml-file="./streams.toml"

hotkeys:
these are supposed to work on the control panel webpage, no promises as to functionality:
alt+[1...9] listen to numbered stream
alt+shit+[1...9] toggle blur on numbered stream
alt+s select currently focused stream to swapp
alt+c activate censor mode
alt+shit+c deactivate censor mode

if the hotkeys don't work, just click the button instead ig

troubleshooting:
if it fux up, just delete the dir, clear your npm cache, and try again

need enough screen space to display 1920x1080p window, with room for titlebar. to config for a smaller window, edit your config file or like so:

npm start -- window --window.width=1024 --window.height=768

if the streams drop to black while running the app, refresh them from the control panel by clicking the bottom-right button in the stream box

if a stream gets stuck on a commercial, try to remove the url from the list, then put it back and re-assign the stream to that box

credits:

streamwall.io
svg icons from Font Awesome by Dave Gandy - http://fontawesome.io

note: somewhat resource-intensive, especially for large numbers of streams. u'v been warned =)































