var pkg = require('./package.json');
var platform = process.env.platform;

module.exports = {
    'make_targets': {
        'win32': [
            'squirrel'
        ],
        'darwin': [
            'zip',
            'dmg'
        ],
        'linux': [
            'rpm',
            'deb'
        ]
    },
    'electronPackagerConfig': {},
    'electronWinstallerConfig': {
        'name': 'electron_test',
        'setupExe': 'electron_test_' + pkg.version + (!!platform && platform.length > 0 ? ('_' + platform) : '') + '.exe'
    },
    'electronInstallerDMG': {
        'name': 'electron_test'
    },
    'electronInstallerDebian': {},
    'electronInstallerRedhat': {},
    'github_repository': {
        'owner': ''
    },
    'windowsStoreConfig': {
        'packageName': '',
        'name': 'electrontest'
    }
};