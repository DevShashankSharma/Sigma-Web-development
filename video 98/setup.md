## How to setup Tailwind CSS

Step-1 : Run the following command  
```
npm install -D tailwindcss
npx tailwindcss init
```

Step-2 : Update the tailwind.config.js file with your own config.
```
 content: ["*.html"]
```

Step-3 : Create src/input.css to include :
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step-4 : Include src/output.css by running this command
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```