import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

class HomeTab extends StatefulWidget {
  @override
  _HomeTabState createState() => _HomeTabState();
}

class _HomeTabState extends State<HomeTab> {
  // Get recent posts to build.

  Future<void> initState() async {
    QuerySnapshot postsDocs = await FirebaseFirestore.instance
        .collection('new_posts')
        .where('status', isEqualTo: true)
        .orderBy('timestamp')
        .limit(3)
        .get();

    print(postsDocs.docs.toString());

    super.initState();
  }

  List<Widget> posts = [];

  @override
  Widget build(BuildContext context) {
    return Column(children: posts);
  }
}
