import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';

class AccountPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    void signOut() {
      FirebaseAuth.instance.signOut();
    }

    return Container(
        child: Column(
      children: [
        FlatButton(
          padding: EdgeInsets.all(15.0),
          onPressed: signOut,
          child: Text('Sign Out'),
        )
      ],
    ));
  }
}
