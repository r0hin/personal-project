import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

class HomeTab extends StatefulWidget {
  @override
  _HomeTabState createState() => _HomeTabState();
}

class _HomeTabState extends State<HomeTab> {
  // Get recent posts to build.

  void initState() {
    CollectionReference posts = FirebaseFirestore.instance.collection('users');

    super.initState();
  }

  List<Widget> posts = [];

  @override
  Widget build(BuildContext context) {
    return Column(children: posts);
  }
}
