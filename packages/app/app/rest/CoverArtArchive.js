const apiUrl = 'https://coverartarchive.org';

function releaseGroupFront(group, size = 250) {
  return new Promise(fulfill => {
    fetch(apiUrl + 'release-group/' + group.id + '/' + 'front-' + size)
      .then(cover => {
        if (!cover.ok) {
          group.cover = null;
          fulfill(group);
        } else {
          group.cover = cover.url;
          fulfill(group);
        }
      })
      .catch(() => {
        group.cover = null;
        fulfill(group);
      });
  });
}

const getCoverForRelease = releaseId => {
  return fetch(`${apiUrl}/release-group/${releaseId}/front`);
};

module.exports = {
  releaseGroupFront,
  getCoverForRelease
};
