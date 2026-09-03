# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **510**
- latestMachineAdded: **ルパン三世～ルパン一族の秘宝～**（平和 / 2010-09-21）
- latestRecord: `docs/real_machine_db/machines/2010-09-21_lupin-the-third-lupin-family-secret-treasure.md`
- chronologicalFrontier: **2010-09-21**
- frontierLatestMachine: **ルパン三世～ルパン一族の秘宝～**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線509実レコード「極楽パロディウス」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり最新 `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本地点は recordCount **509** / chronologicalFrontier **2010-09-21**。
- repo内で「ルパン三世」「ルパン一族の秘宝」を検索し未登録を確認。9/21同日群の未処理として510件目に追加。
- 2010-09-07〜20境界はHAZUSE 9/10・9/17節点、P-WORLD月間一覧等を再確認。今回新たに9/21より前と確定できる未登録全国導入機は確定できず、継続監査扱い。

## 510 — ルパン三世～ルパン一族の秘宝～ 要約

- メーカー: **平和**
- 導入主値: **2010-09-21**。直前handoffで複数導入カレンダー照合済み。平和ルパン公式HISTORYは2010年9月導入開始。平和2010製品一覧の「登場年月 2010年07月」は発表/製品登場系の定義差として分離。
- 型式補助: **ルパン三世ルパン一族の秘宝Z**（実機流通表記。検定番号は未回収）
- 世代/タイプ: **5号機 / ボーナス+ツインART**
- 機械割主系列: **97.1 / 99.1 / 101.8 / 104.5 / 109.1 / 115.8%**
- BIG合算: **1/397 / 1/390 / 1/377 / 1/364 / 1/352 / 1/331**
- REG: **1/596 / 1/585 / 1/565 / 1/546 / 1/529 / 1/496**
- ボーナス合算: **1/238 / 1/234 / 1/226 / 1/218 / 1/211 / 1/199**
- ボーナス+ART初当り合算: **1/155 / 1/149 / 1/142 / 1/135 / 1/127 / 1/115**
- 50枚ベース: **34.32 / 34.33 / 34.35 / 34.35 / 34.37 / 34.39G**
- SUPER BIG約**252枚+ART**、NORMAL BIG約**204枚**、REG約**72枚**。
- ART「ゼニガタイム」: **30/50/100G・約+1.3枚/G**のストック管理型。
- ART「スーパーヒーロー」: **100G+α・約+1.3枚/G**のゲーム数上乗せ型。
- 天井: ボーナス間**1000G以降**の2連/3連チェリーでZT高確率、**1500G以降**の次回ボーナスでSH確定、REG規定G **128/181/565/821/999G**等超過後のREGでSH確定。
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_RESEARCHED**

## resetBehavior v0.7 — ルパン三世～ルパン一族の秘宝～

- **設定変更**: K-Naviと旧パチマガに本機固有「設定変更後の挙動」「朝イチ・設定変更」項目の存在は確認したが、検索取得本文から具体処理を回収できず `UNVERIFIED_AFTER_RESEARCH`。検索語・資料系統を変更して再探索済み。
- **ゲーム数/天井**: 通常仕様の1000G/1500G天井・REG規定Gは確定。設定変更時CLEAR/RETAIN、変更専用短縮天井、REG規定G再抽選は `UNVERIFIED_AFTER_RESEARCH`。
- **据え置き**: 1000/1500G天井進捗、REG規定G、内部状態A/B/C、サーチライト高確、ZTストック、SH残Gの日跨ぎ保持は直接資料未回収のため `UNVERIFIED_AFTER_RESEARCH`。
- **電源OFF→ON**: ボーナス間G数、規定G、内部状態、高確、ARTストック/残Gの本機固有処理は `UNVERIFIED_AFTER_RESEARCH`。
- **モード/状態**: 通常時内部状態A/B/C/プチRT、ART高確「サーチライトステージ」は確認。設定変更時初期状態/振り分けは未確定。
- **有利区間**: **NOT_APPLICABLE**（5号機・制度前）。
- **朝一恩恵/不利**: 設定変更専用短縮、高確スタート、ART付与等は `NONE_CONFIRMED_AFTER_RESEARCH`。天井進捗消失自体が未確定なので朝一不利も断定しない。
- **変更判別**: ガックン、初期出目、ステージ等の本機固有確定条件/確率は `UNVERIFIED_AFTER_RESEARCH`。
- **公開数値**: 1000G、1500G、REG規定候補128/181/565/821/999Gは通常仕様。リセット専用数値は未確認。

## CONFLICT

- 主機械割系列はK-Navi/pacnk等で **97.1 / 99.1 / 101.8 / 104.5 / 109.1 / 115.8%**。
- PachiSeven回顧は **97.1 / 99.1 / 101.3 / 104.0 / 108.6 / 115.5%**。平均化せず `CONFLICT` 保持。
- 平和製品一覧の「2010年07月登場」と平和ルパンHISTORYの「2010年9月導入開始」は日付定義差として保持し、ホール導入主値へ混ぜない。

## resetBehavior 遡及QA — 継続地点

- `2006-11_jack-to-mamenoki.md` までv0.7遡及追加済み、という既存正本進捗を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehaviorありのため重複QAしない。
- ジャックと豆の木直後かつresetBehavior欠損の最初の実レコードは、recursive tree / commit history / 実ファイルpathで順序を確定してからパッチする。
- 新規機種の時系列前進は止めない。

## 主要出典（取得日 2026-09-04）

- 平和2010機種一覧: `https://www.heiwanet.co.jp/products/pachislot/2010/`
- HEIWA×ルパンHISTORY: `https://heiwa-lupin.com/history/`
- K-Navi: `https://p-kn.com/slot/1264/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6058`
- 旧パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/39/heiwa_slot_39.php`
- 旧パチマガ50枚ベース/内部状態: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/39/c.php`
- pacnk: `https://pacnk.com/slot/tools/sh_lupinitizokunohiho.html`
- PachiSeven回顧: `https://pachiseven.jp/articles/detail/12440`
- 当時解析ブログ: `https://ameblo.jp/samurai777net/entry-10642865753.html`
- グリーンべると: `https://web-greenbelt.jp/00006632/`

## 今回のGitHub更新

- 510 ルパン三世～ルパン一族の秘宝～追加: commit `6c43e7f30648b9c789ee5ca7466b99731f780711`
- LATEST_HANDOFF更新: このコミット

## 次回再開地点

1. **recordCount 510 / chronologicalFrontier 2010-09-21**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **9/21同日群を最終監査**。HAZUSE、P-WORLD/K-Navi、メーカー別一覧で別未登録5号機がないか確認。
3. とくにP-WORLD 2010年9月一覧にありrepo未確認の **「沖楽」（西陣）** の正確な導入日を追加照合。9/21以前と判明した場合は時系列補完として最優先追加。
4. 直前から継続中の **2010-09-07〜20境界**もHAZUSE 9/10・9/17、月間一覧、当時納品資料で再監査し、日付定義差の未登録を飛ばさない。
5. 上記を閉じられた場合のみ9/22以降へ進む。HAZUSE 9/24、9/27節点を確認し、既知後続候補「茉莉花の剣」「リングにかけろ1 ～黄金の日本Jr.編～」等をrepo重複確認後に調査。
6. 510の追加QAは、設定変更で1000/1500G天井・REG規定GがCLEAR/RETAINされる直接本文、単純電源OFF→ON、朝一内部状態、ガックン等が新たに見つかった場合のみ追補。推測で埋めない。
7. 遡及QAは既存地点を維持し、新規時系列前進を止めない。