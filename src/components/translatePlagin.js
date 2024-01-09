export default {
    install(app, options) {

        let current = 'uk'
        const changeLanguage = name => { 
            if (name) {
                current = current === "uk" ? "en" : "uk";                
            }
        }
            
        app.config.globalProperties.$alert = text => {
            window.alert(text)
        }

        app.config.globalProperties.$i18n = key => {
            return key.split('.').reduce((words, k) => {
                return words[k] || '===UNKNOWN==='
            }, options[current])
        }

        app.provide('changeI18N', changeLanguage)
  },
};