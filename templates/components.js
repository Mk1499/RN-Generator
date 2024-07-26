import fs from "fs-extra";
import path from "path";
import chalk from "chalk";

export default (name) => {
  const componentTemplate = `
    import React from 'react';
    import { View, Text } from 'react-native';
    import makeStyle from './styles';
    
    const ${name} = () => {
     const styles = makeStyle()
     
      return (
        <View>
          <Text>${name} Component</Text>
        </View>
      );
    };
    
    export default ${name};
    `;

  const stylesTemplate = `
    import { StyleSheet } from 'react-native';

    const styles = () => StyleSheet.create({
      // Add styles here
    });

    export default styles;
    `;

  fs.outputFileSync(
    path.join(process.cwd(), `/components/${name}/index.tsx`),
    componentTemplate
  );

  fs.outputFileSync(
    path.join(process.cwd(), `/components/${name}/styles.ts`),
    stylesTemplate
  );

  console.log(chalk.green(`Component ${name} created successfully!`));
};
