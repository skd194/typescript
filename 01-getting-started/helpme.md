1.  install latest node
2.  use 'tsc' for typescript compiler
    eg : 'tsc index.ts' -> to transpile the ts file to js file
3.  configure typescript compiler
    a. type 'tsc --init' in the command prompt which will effectively create a tsconfig.json
4.  Once the tsconfig file is configure we can simply type 'tsc' in the terminal which will transpile all the ts files
5.  To debug
    a. configure launch.json file and add

          "preLaunchTask": "tsc: build - tsconfig.json",

          just below the program property

            eg : in our current case the configuration will be

                 "preLaunchTask": "tsc: build - 01-getting-started/tsconfig.json",

    b. set

         sourceMap: true

         in the tsconfig.json
