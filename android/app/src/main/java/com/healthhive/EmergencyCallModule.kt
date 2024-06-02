package com.healthhive

import android.content.Intent
import android.net.Uri
import android.provider.Settings
import android.telecom.TelecomManager
import android.content.Context
import android.content.pm.PackageManager
import androidx.core.content.ContextCompat
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class EmergencyCallModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "EmergencyCallModule"
    }

    @ReactMethod
    fun makeEmergencyCall(number: String) {
        val telecomManager = reactContext.getSystemService(Context.TELECOM_SERVICE) as TelecomManager
        val emergencyNumber = "+923102843036"

        if (ContextCompat.checkSelfPermission(reactContext, android.Manifest.permission.CALL_PHONE) == PackageManager.PERMISSION_GRANTED) {
            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.M) {
                telecomManager.placeCall(Uri.parse("tel:$emergencyNumber"), null)
            } else {
                val intent = Intent(Intent.ACTION_CALL)
                intent.data = Uri.parse("tel:$emergencyNumber")
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                reactContext.startActivity(intent)
            }
        } else {
            // Request permission from user
            val permissionIntent = Intent(Settings.ACTION_MANAGE_WRITE_SETTINGS)
            permissionIntent.data = Uri.parse("package:" + reactContext.packageName)
            permissionIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
            reactContext.startActivity(permissionIntent)
        }
    }
}
