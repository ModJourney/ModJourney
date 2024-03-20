#
# build the client pack for import in curseforge launcher
#
# archive excluded files are defined via .gitattributes-file
# @see https://git-scm.com/docs/git-archive
#
# @todo Load current commit-id (or latest tag) from git (or name and version from manifest.json) and use it as archive-name
#

echo "Building client archive"
ARCHIVE_FILE_NAME=dytech-4-client.zip
SCRIPT_DIR="$(dirname "$0")"
PROJECT_DIR="${SCRIPT_DIR}/../"
BUILD_DIR="${PROJECT_DIR}build/"

mkdir -p "${BUILD_DIR}"
git archive --add-file="${PROJECT_DIR}manifest.json" --add-file="${PROJECT_DIR}modlist.html" --prefix=overwrites/ -o "${BUILD_DIR}${ARCHIVE_FILE_NAME}" HEAD

# Show the created file
ls -lh "${BUILD_DIR}${ARCHIVE_FILE_NAME}"
