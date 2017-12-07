# Portfolio
Let's make a portfolio starter

## Setup
- Fork this repository (https://github.com/bastienrobert/portfolio-starter/fork).
- Go to config.rb, find the  config[:host] line and edit to set your website URL. Commit & push.
- Then, go to https://netlify.com and create a new website. Connect with Github, select the repository.
- Once it is in production, go to the Netlify admin pannel, Settings > Domain Management and follow the instructions.

## How to use ?
### Projects
Add your projects to data/projects.yml. You can add your own custom fields.
In the example, EN & FR are arrays. Set your text to able it to be translated. Images doesn't need to be translated, so it's in a separate array.

### Images
If you want to include images, go to source/images, create a folder named as your project slug in the default language.
Use the following helper :
```
<%= project_image(project, 'main.jpg', {OPTIONS}) %>
```
- *Project*: your project data
- *'main.jpg'*: the image
- *'cover image'*: your alt (project name will be added before this)
- *'options' array*: your options, like the class, the alt, or other things like that. 'Alt' is formated like that : _project name + alt property you pass in the array_

### Locales
Project locale text -> data/projects.yml
Other locales, other pages... -> locales/
