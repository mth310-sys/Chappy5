# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **512**
- latestMachineAdded: **茉莉花の剣**（ネット / 2010-09-27）
- latestRecord: `docs/real_machine_db/machines/2010-09-27_marika-no-ken.md`
- chronologicalFrontier: **2010-09-27**
- frontierLatestMachine: **茉莉花の剣**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、511実レコード「沖楽」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり最新 `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本地点は recordCount **511** / chronologicalFrontier **2010-09-21**。
- 9/21同日群と9/7〜20境界を再監査。既知の9/21候補は既登録済みであることを確認し、次の明確な節点へ前進。
- K-Naviで **2010-09-27「茉莉花の剣」**のホール導入開始を確認し、repo検索で未登録を確認したため512件目に追加。

## 512 — 茉莉花の剣 要約

- メーカー: **ネット（NET）**
- 導入: **2010-09-27**
- 世代/タイプ: **5号機 / A+ART / CZ搭載**
- 機械割: **96.5 / 98.0 / 100.0 / 102.5 / 105.0 / 110.0%**
- BIG合算: **1/378 / 1/381 / 1/376 / 1/378 / 1/374 / 1/376**
- REG: **1/420 / 1/412 / 1/404 / 1/397 / 1/387 / 1/378**
- ボーナス合算: **1/199 / 1/197 / 1/195 / 1/193 / 1/190 / 1/188**
- ART「試練の刻」: **40G+α / 約+1.3枚/G**
- 赤7BIG約**275枚**、青7BIG約**208枚**、REG約**70枚**。
- 通常時CZは**20G固定**。
- 天井: **ボーナスおよびART間899G**で前兆を経てART。
- K-Naviのボーナス+ART合成は設定1 **1/101**、設定6 **1/80**。設定2〜5未発表のため補間なし。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。小役から逆算していない。
- coreStatus: **COMPLETE_CORE_WITH_BASE_AND_RESET_LOW_LEVEL_UNVERIFIED**

## resetBehavior v0.7 — 茉莉花の剣

- **設定変更**: K-Navi本機ページに「設定変更後の挙動」専用項目が現存することは確認。ただし個別本文が取得環境でcache missとなり、設定変更時の899G進捗・CZ/ART/内部状態の具体処理は直接確定できず `PARTIAL / DIRECT_DETAIL_UNAVAILABLE_AFTER_RESEARCH`。
- **据え置き**: 899G天井の存在は確定するが、据え置き時に進捗を引き継ぐと直接明記する本文を今回確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **電源OFF→ON**: 天井進捗、CZ/ART/RT状態、表示状態の本機固有処理は `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数/天井**: 通常天井はボーナス・ART間**899G**。設定変更時のリセット/引継ぎは未確定。
- **リセット専用天井短縮**: `NONE_CONFIRMED_AFTER_RESEARCH`。899G通常天井と混同しない。
- **モード/状態**: 設定変更時の再抽選/引継ぎを直接確定できず。
- **有利区間**: **NOT_APPLICABLE**（5号機・制度前）。
- **朝一恩恵/不利**: 設定変更専用の短縮天井、ART/CZ確定、初当たり優遇率等は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: ガックン、初期出目、表示等の本機固有条件/確率は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一関連数値**: 通常天井899G以外、設定変更専用数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

## CONFLICT / 注意

- 採用した性能コアの明確な数値CONFLICTは現時点なし。
- 5号機クロニクルの茉莉花の剣節には、P-WORLD/K-Naviと異なるART名称・セットG数等を含む後年回顧記述が混在するため、ART基本性能はP-WORLD/K-Naviの直接機種ページを優先。回顧記述を主値にしない。
- K-Naviの「ボーナス+ART合成」1/101・1/80とP-WORLDの「ボーナス合算」1/199〜1/188は定義違い。競合扱いせず別系列として保持。

## resetBehavior 遡及QA — 継続地点

- `2006-11_jack-to-mamenoki.md` までv0.7遡及追加済み、という既存正本進捗を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehaviorありのため重複QAしない。
- ジャックと豆の木直後かつresetBehavior欠損の最初の実レコードは、recursive tree / commit history / 実ファイルpathで順序を確定してからパッチする。
- 新規機種の時系列前進は止めない。

## 主要出典（取得日 2026-09-04）

- K-Navi 茉莉花の剣: `https://p-kn.com/slot/1269/`
- P-WORLD 茉莉花の剣: `https://www.p-world.co.jp/_machine/hoollst.cgi?ken=all&kisyu=%EF%BF%BD%EF%BF%BD%E8%BD%B2%D6%A4%CE%B7%EF%BF%BD&kisyukind=&mno=p6074`
- 5号機クロニクル ネット一覧: `https://5goki.com/net`
- 2010-10-08当時実戦/紹介記録: `https://plaza.rakuten.co.jp/gaebulggaebolga/diaryall/`
- リングにかけろ1～黄金の日本Jr.編～当時解析（次回候補のresetBehavior確認用）: `https://ameblo.jp/samurai777net/entry-10669262756.html`

## 今回のGitHub更新

- 512 茉莉花の剣追加: commit `0e02e6d9243e2521c8c0f3431262ca8ec1b425d0`
- LATEST_HANDOFF更新: このコミット

## 次回再開地点

1. **recordCount 512 / chronologicalFrontier 2010-09-27**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-09-27同日群を継続監査**。最優先候補は未登録確認済みの **「リングにかけろ1 ～黄金の日本Jr.編～」**（タイヨーエレック）。複数資料で2010年9月、後年DBで9/27導入を確認しているため、具体日を再照合して茉莉花との同日順を安全に扱う。
3. リンかけは当時解析で **設定変更後は周期CZへ突入**という重要resetBehavior情報を既に確認。周期64G、天井1150G級の情報も定義を再確認し、設定変更・据え置き・電源OFF→ON・天井進捗・モード/状態・朝一恩恵・変更判別を検索語変更して詰める。
4. 9/27同日群を閉じる前に「Myジャグラー」「ケロット～スウィートVer.～」「ピンポン」「ロケットパニック」等、P-WORLD上で同時期に並ぶ2010年9月機について具体日とrepo登録状況を再監査し、月粒度漏れを防ぐ。
5. 512追加QAは、50枚ベース、正式型式/検定番号、K-Navi「設定変更後の挙動」本文、電源OFF→ON、ガックン等の直接資料が新たに取れた場合のみ追補。推測で埋めない。
6. 遡及QAは既存地点を維持し、新規時系列前進を止めない。