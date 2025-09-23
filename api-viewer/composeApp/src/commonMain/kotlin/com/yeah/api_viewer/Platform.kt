package com.yeah.api_viewer

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform