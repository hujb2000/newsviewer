import { Meteor } from 'meteor/meteor';
import Links from '/imports/api/links';
import Sinanews from '/imports/api/news';

function insertLink(title, url) {
  Links.insert({ title, url, createdAt: new Date() });
}

// function insertSinanews(title, href) {
//     Sinanews.insert({ title, href });
// }


Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (Links.find().count() === 0) {
    insertLink(
      'Do the Tutorial',
      'https://www.meteor.com/tutorials/react/creating-an-app'
    );

    insertLink(
      'Follow the Guide',
      'http://guide.meteor.com'
    );

    insertLink(
      'Read the Docs',
      'https://docs.meteor.com'
    );

    insertLink(
      'Discussions',
      'https://forums.meteor.com'
    );
  }

    // console.log(Sinanews.find().count())
    // news = Sinanews.find({'code':'00002'}).fetch();
    // console.log(news);

    // if(Sinanews.find().count() === 0) {
  //     insertSinanews('a','b');
  //     insertSinanews('c','d');
  // }
});
