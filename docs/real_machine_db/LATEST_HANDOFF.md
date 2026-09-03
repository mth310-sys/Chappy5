# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **513**
- latestMachineAdded: **リングにかけろ1 ～黄金の日本Jr.編～**（タイヨーエレック / 2010-09-27）
- latestRecord: `docs/real_machine_db/machines/2010-09-27_ring-ni-kakero-1-ogon-no-nihon-jr-hen.md`
- chronologicalFrontier: **2010-09-27**
- frontierLatestMachine: **リングにかけろ1 ～黄金の日本Jr.編～**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線511実レコード「沖楽」を再取得。
- `INDEX.md` は旧地点のため、README規定どおり最新 `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本地点は recordCount **511** / chronologicalFrontier **2010-09-21**。
- 9/21同日群と9/22以降を再監査。2010-09-27「茉莉花の剣」が並行更新で512件目としてmainへ追加されたことを検知し、その最新版を正本として採用。
- 同日導入の「リングにかけろ1 ～黄金の日本Jr.編～」をrepo検索で未登録確認し、513件目として追加。
- 並行更新との競合で一時的に作成された重複「茉莉花の剣」ファイル `2010-09-27_marika-no-tsurugi.md` は削除し、既存正本 `2010-09-27_marika-no-ken.md` に一本化。recordCountを二重加算していない。
- 茉莉花の剣の天井について、既存正本は**899G**。K-Navi現存ページは天井解析項目の存在のみで数値本文が取得不能だった一方、2010-10-08当時実戦/紹介記録は「ボーナスまたはART終了後899G」と明記。別後年資料の889G値は高信頼で再確認できなかったため、現正本899Gを維持しCONFLICTを無理に平均しない。

## 512 — 茉莉花の剣（既存並行更新を正本採用）

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
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。
- resetBehavior: K-Naviに「設定変更後の挙動」専用項目の存在は確認したが本文回収不能。設定変更時899G進捗、据え置き、電源OFF→ON、CZ/ART状態、変更判別、専用朝一数値は未確認。有利区間は**NOT_APPLICABLE**。
- 5号機クロニクルのART名称/セットG/純増に当時K-Naviとの重大不整合があるため後年側を主値に混ぜない。

## 513 — リングにかけろ1 ～黄金の日本Jr.編～

- メーカー: **タイヨーエレック**
- 導入: **2010-09-27**（K-Navi＋サミーネットワークス公式で具体日整合）
- 世代/タイプ: **5号機 / A+ART**
- 型式参考: **リングにかけろ1黄金のJr.編ZR**（secondary physical-market reference、限定採用）
- 機械割: **97.35 / 98.89 / 101.41 / 106.04 / 112.00 / 119.22%**
- BIG合成: **1/362.1 / 1/350.5 / 1/339.6 / 1/329.3 / 1/319.7 / 1/312.1**
- REG: **1/704.7 / 1/675.6 / 1/655.4 / 1/630.2 / 1/606.8 / 1/590.4**
- ボーナス合算: **1/239.2 / 1/230.8 / 1/223.7 / 1/216.3 / 1/209.4 / 1/204.2**
- NEXT ART突入率: **1/2341.0 → 1/1129.9**
- 50枚ベース: **約34.0G**
- ART「ブーメランRUSH」: **約+1.0枚/G / 30G+α**。NEXT ARTは次回ボーナスまで継続。
- 天井は固定G数単純管理ではなく**周期回数管理**。通常64G周期を15回連続で外した後、次の16回目チャンス演出でNEXT ART確定。実G数目安はボーナス/ART後**約1150G**。
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7 — リングにかけろ1 ～黄金の日本Jr.編～

- **設定変更後は周期CZへ直接突入**。
- 設定変更で**天井周期回数CLEAR**。
- 設定変更で**NEXT ART抽選テーブルRESELECT**。
- 液晶上のグローブは設定変更でクリア。さらに**単純電源OFF→ONだけでも可視グローブはクリア**。
- 設定変更専用の短縮天井は確認なし。通常16周期構造を最初から積み直す。
- 据え置き時の周期回数/内部状態保持、電源OFF→ON時の周期回数・抽選テーブル・ARTストック/内部RTは直接資料未回収のため `UNVERIFIED_AFTER_RESEARCH`。
- 朝一周期CZは変更示唆に使えるが、ボーナス後等もCZ突入契機なので単独で変更確定にはしない。
- グローブ消去は電源OFF→ONだけでも起こるため設定変更判別には使えない。
- ガックン確率は未確認。
- 有利区間: **NOT_APPLICABLE**。

## CONFLICT / 注意

- 茉莉花の剣: 当時K-NaviはART「試練の刻」約+1.3枚/G・20G固定CZを明記。後年5号機クロニクルには別ART名・別仕様が混在するため主値不採用。
- 茉莉花の剣の天井は現正本**899G**。一時作成した重複レコード内の889Gは再検証で高信頼裏付け不足と判断し、重複ごと削除。推測平均しない。
- リングにかけろ1: K-Navi/Cranky Seven/当時グリーンべるとの機械割は最高設定**119.22%**で整合。一方、後年DBに**96.5〜110.0%**系列があるためCONFLICT分離。
- リングにかけろ1天井: 「約1150G天井」だけで単純化せず、**64G周期×15回失敗→16回目NEXT ART確定**という構造を保持。

## resetBehavior 遡及QA — 継続地点

- `2006-11_jack-to-mamenoki.md` までv0.7遡及追加済み、という既存正本進捗を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehaviorありのため重複QAしない。
- machine directory、recursive tree、code search、commit/date検索を再試行したが、Jack/Thunder直後の「最初の実在かつresetBehavior欠損ファイル」を時系列順序保証付きで一意確定できなかった。
- 「小野真弓のかわいい日本昔話」「海童王」等の候補をpath未確認のままQA済みにしない。
- 新規時系列前進を止めず、次回も実ファイルpath/commit historyから次の欠損を確定する。

## 主要出典（取得日 2026-09-04）

### 茉莉花の剣
- K-Navi: `https://p-kn.com/slot/1269/`
- P-WORLD: `https://www.p-world.co.jp/_machine/hoollst.cgi?ken=all&kisyu=%EF%BF%BD%EF%BF%BD%E8%BD%B2%D6%A4%CE%B7%EF%BF%BD&kisyukind=&mno=p6074`
- 5号機クロニクル（競合確認のみ）: `https://5goki.com/net`
- 2010-10-08当時実戦/紹介記録: `https://plaza.rakuten.co.jp/gaebulggaebolga/diaryall/`

### リングにかけろ1 ～黄金の日本Jr.編～
- K-Navi: `https://p-kn.com/slot/1261/`
- Cranky Seven: `https://crankyseven.com/sp/ringnikakero-ougon-pc.htm`
- 侍～samurai～777 当時解析: `https://ameblo.jp/samurai777net/entry-10669262756.html`
- グリーンべると当時記事: `https://web-greenbelt.jp/00002723/`
- サミーネットワークス公式PDF: `https://www.sammy-net.jp/news/pachisloringnikakero0927.pdf`
- パチマガスロマガ公式アーカイブ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/08/c.php`

## 今回のGitHub更新

- 512 茉莉花の剣: 並行更新の既存正本 `docs/real_machine_db/machines/2010-09-27_marika-no-ken.md` を採用。
- 重複茉莉花レコード削除: `docs/real_machine_db/machines/2010-09-27_marika-no-tsurugi.md`。
- 513 リングにかけろ1 ～黄金の日本Jr.編～追加: `docs/real_machine_db/machines/2010-09-27_ring-ni-kakero-1-ogon-no-nihon-jr-hen.md`。
- LATEST_HANDOFF更新: このコミット。

## 次回再開地点

1. **recordCount 513 / chronologicalFrontier 2010-09-27**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 512・513実レコードを再取得。
2. **2010-09-27同日群を最終監査**。特に「Myジャグラー」「ケロット～スウィートVer.～」「ピンポン」「ロケットパニック」等、同時期機の具体導入日とrepo登録を再確認。
3. 同日群を閉じたら、**9/28以降の最古の具体導入日が確定する未登録機**へ前進。具体日不明の2010年9月月粒度機も漏れ監査を継続し、推測配置しない。
4. 茉莉花の剣はK-Navi「設定変更後の挙動」本文、50枚ベース、正式型式/検定番号が回収できた場合のみ追補。
5. リングにかけろ1は据え置き時周期保持、電源OFF→ON時の内部周期/テーブル/ART状態、設定変更直後NEXT ARTテーブル専用振り分け、ガックン確率を優先QA。
6. 遡及QAは **Jackまで補完済み + Thunder既収集済み**。次の実在resetBehavior欠損pathをgit tree/commit履歴で確定してからパッチし、推測タイトルでは進めない。
