#
# build the client pack for import in curseforge launcher
#
# archive excluded files are defined via .gitattributes-file
# @see https://git-scm.com/docs/git-archive
#
# @todo Load current commit-id (or latest tag) from git (or name and version from manifest.json) and use it as archive-name
#

echo "Building client archive"
ARCHIV_FILE_NAME=dytech-4-client.zip
mkdir -p build/
git archive --add-file=manifest.json --add-file=modlist.html --prefix=overwrites/ -o build/${ARCHIV_FILE_NAME} HEAD
