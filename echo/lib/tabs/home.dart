import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

class HomeTab extends StatefulWidget {
  @override
  _HomeTabState createState() => _HomeTabState();
}

class _HomeTabState extends State<HomeTab> {
  // Get recent posts to build.

  List<Widget> posts = [];

  Future<void> getAllPosts() async {
    QuerySnapshot postsDocs = await FirebaseFirestore.instance
        .collection('new_posts')
        .where('status', isEqualTo: true)
        .orderBy('timestamp', descending: true)
        .limit(3)
        .get();

    for (var i = 0; i < postsDocs.docs.length; i++) {
      if (postsDocs.docs[i].data()['file_url'] == 'echo-home-text_post') {
        setState(() {
          posts.add(Container(
              width: double.infinity,
              child: Text(postsDocs.docs[i].data()['url_content'],
                  style: TextStyle(
                    fontSize: 24,
                    fontFamily: 'OpenSans',
                    fontWeight: FontWeight.bold,
                  ))));
        });
      } else {
        setState(() {
          posts.add(Container(
              width: double.infinity,
              child: Image.network(postsDocs.docs[i].data()['file_url'])));
        });
      }
    }
    print(posts);
  }

  void initState() {
    super.initState();
    getAllPosts();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(15.0),
      child: SingleChildScrollView(
        child: Column(
          children: posts,
        ),
      ),
    );
  }
}
