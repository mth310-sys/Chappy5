# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **677**
- latestMachineAdded: **マイジャグラーII**（北電子）
- latestRecord: `docs/real_machine_db/machines/2012-07-30_my-juggler-ii.md`
- chronologicalFrontier: **2012-07-30**
- frontierLatestExactDateMachine: **マイジャグラーII**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2012-07-30__AUDIT_2012-07-31_TO_2012-08-05_THEN_Next_2012-08-06**

## 今回の同期・時系列監査

- 最新mainのREADME全文、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「メガミリオネア」を確認して開始。
- INDEXは旧地点19件のまま。README規定どおりLATEST_HANDOFFと実レコードを進捗正本として使用。開始時は recordCount 676 / frontier 2012-07-30。
- LATEST_HANDOFF指定の次候補「マイジャグラーII」をrepo検索し未登録を確認。
- K-Navi機種ページ・2012年7月導入カレンダーはホール導入開始2012-07-30。当時グリーンべるとは7月29日納品開始予定とするため677件目として追加。
- K-Naviの2012-07-30全国導入一覧にあるパチスロは「メガミリオネア」「マイジャグラーII」の2機種で、両方登録済み。07-30同日群をCLOSEDとする。

## 今回の本線追加 — マイジャグラーII

### 識別

- manufacturer: **北電子**
- releaseDate key: **2012-07-30**
- generation: **5号機**
- systemType: **ノーマル / 完全告知 / ボーナス主体**
- modelName: **マイジャグラーII K（2012年版）**
- approvalNumber: **UNVERIFIED_AFTER_RESEARCH**
- 型式はCONFLICT注意。2012-06-18東京都公安委員会検定情報転載は「マイジャグラーII K」、Juggler7も2012=K / 2013=KKと区別。一方HAZUSEは2012-07-30導入欄にKK/3S0218を併記。2013系KKを2012本線へ混同しない。

### 性能コア

- メーカー発表値系列の機械割: **95.7 / 97.9 / 99.9 / 102.8 / 105.3 / 109.4%**
- BIG: **1/287.4 / 282.5 / 273.1 / 264.3 / 252.1 / 240.9**
- REG: **1/431.2 / 364.1 / 341.3 / 292.6 / 277.7 / 240.9**
- 合算: **1/172.5 / 159.1 / 151.7 / 138.9 / 132.1 / 120.5**
- 50枚ベース: **約35.0 / 35.2 / 35.4 / 35.6 / 35.8 / 36.4G**。後年「マイジャグラー系」表で本機を対象にしたチェリー狙い時数値のためANALYSIS_SINGLE_RETROSPECTIVE_SERIES_TABLE。
- BIG: **約312枚**、REG: **約104枚**。
- ART/AT非搭載。天井非搭載。通常時モード非搭載。

### resetBehavior v0.7

- `settingChangeBehavior`: **PARTIAL_CONFIRMED**。本機固有解析で設定変更後1G目のリールブレ（ガックン）を確認。天井・通常モードは非搭載。
- `carryOverBehavior`: **NO_CEILING_OR_MODE_TO_CARRY__OTHERWISE_UNVERIFIED_AFTER_RESEARCH**。天井G数/モード据え置きは構造上非該当。それ以外の純据え置き内部契約は一般化しない。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。機種名表記・K型式と電源OFF ON/電断/据え置き等を組み替えて再探索したが、本機固有の単純電断契約を確定できず。
- `gameCounterReset`: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**
- `ceilingAfterReset`: **NOT_APPLICABLE_NO_CEILING**
- `modeAfterReset`: **NOT_APPLICABLE_NO_NORMAL_MODE**
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。モード非搭載から全内部状態を推測しない。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**
- `resetBenefits`: **NONE_CONFIRMED**。短縮天井・朝一高確/CZ等なし。
- `resetPenalties`: **NONE_CONFIRMED**
- `resetDetection`: **GACKUN_CONFIRMED_MACHINE_SPECIFIC_RETROSPECTIVE**。設定変更後1G目にリールがブレる。停止位置で見分けにくい場合があるため単独確定判別とはしない。
- `publicMorningNumbers`: **NONE_CONFIRMED**

### 主要CONFLICT / 品質メモ

- 2012年本線型式Kと、2013年系KKの資料混在に注意。HAZUSEの2012導入日+KK/3S0218はそのまま主値にせずCONFLICT注記。
- 通常のメーカー発表機械割とチェリー狙い/フル攻略時の機械割は定義差。平均化しない。
- 50枚ベースは後年のシリーズ横断表のみ。対象機にマイジャグラーIIを明示しているが当時単独一次値ではないため信頼度を落として保存。
- 「マイジャグラーII / Ⅱ / 2 / マイジャグラーII K」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / ガックン / 天井 / モード / 50枚」を組み替え、北電子、K-Navi、当時業界記事、公安委員会検定情報転載、HAZUSE、専門解析、旧解析、中古実機資料まで横断後に欠損判定。

## 次回再開地点

1. **recordCount 677 / chronologicalFrontier 2012-07-30 / 07-30 group CLOSED**から開始。
2. **2012-07-31〜2012-08-05境界**に具体日付き未登録5号機がないか、K-Navi導入カレンダーだけでなく業界/旧DBも併用して監査。
3. 境界に未処理がなければ **2012-08-06群**へ進む。既知候補としてビスティ **「夜王」**は2012-08-06導入資料が存在するためrepo重複確認を最優先。
4. 08-06同日群は夜王だけで閉じず、全国導入カレンダー・業界資料・メーカー別一覧で残存候補を監査してから次日へ進む。
5. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間/50枚を組み替えて十分再探索してからUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 本線新規収集を止めない。既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- 北電子 検定情報（現存KK地域情報）: `https://www.kitadenshi.co.jp/slot-kentei/myjuggler2kk/`
- K-Navi 機種情報: `https://p-kn.com/slot/1686/`
- K-Navi 2012年7月導入カレンダー: `https://p-kn.com/calendar/201207/`
- グリーンべると当時記事: `https://web-greenbelt.jp/00001556/`
- Pマンズ 2012-06-18東京都公安委員会検定情報転載: `https://p-mans.blogspot.com/2012/06/`
- Juggler専門解析: `https://jugjug.net/myjuggler2`
- Juggler7旧解析: `https://juggler7.com/my2/index.html`
- SLOT HACK コイン持ち一覧: `https://slothack.net/matome/17149/`
- A-SLOT 2012年K資料: `https://www.a-slot.com/SHOP/kitadenshi48.html`
- パチマ中古実機資料: `https://www.pachima.com/c/slot/s_13juggler/S00012`
- HAZUSE: `https://hazuse.com/machine/pachislot/2S0014/`
- 夜王の2012-08-06導入確認資料: `https://w.atwiki.jp/pachikaisekidata/pages/237.html`

## GitHub commits

- マイジャグラーII machine record: `86794e392b35b8728ca456ba0200ddb1e159f716`
