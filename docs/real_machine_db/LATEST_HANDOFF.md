# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **625**
- latestMachineAdded: **パチスロ北斗の拳 世紀末救世主伝説**（Sammy / サミー）
- latestRecord: `docs/real_machine_db/machines/2011-12-05_hokuto-no-ken-seikimatsu-kyuseishu-densetsu.md`
- chronologicalFrontier: **2011-12-05**
- frontierLatestExactDateMachine: **パチスロ北斗の拳 世紀末救世主伝説**
- schema: **resetBehavior v0.7**
- status: **2011-12-05_GROUP_OPEN_CONTINUE_SAME_DAY**

## 今回の本線追加 — パチスロ北斗の拳 世紀末救世主伝説

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「クイーンジャック-30」を再取得して開始。
- 開始時正本は **recordCount 624 / chronologicalFrontier 2011-11-21**。INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFFを進捗正本として使用。
- LATEST_HANDOFF指定の2011-12-02枠をHAZUSEカレンダー、日付完全一致検索、業界記事検索で監査したが、2011-12-02導入の5号機パチスロ実機候補を今回確定できなかった。
- 2011-12-05についてHAZUSE・アタリ7で「パチスロ北斗の拳 世紀末救世主伝説」の導入日が一致。repo code search未検出を確認し625件目として追加。
- 型式名 **パチスロ北斗の拳F**、検定番号 **1S0777**。

### 性能コア

- 5号機 / ボーナス+ART。
- 機械割: **97.0 / 98.5 / 100.6 / 104.4 / 109.4 / 115.2%**。
- ART「激闘乱舞」初当たり: **1/389.5 / 1/378.5 / 1/354.4 / 1/318.8 / 1/271.1 / 1/221.6**。
- ボーナス+ART初当たり合成: **1/298.9 / 1/288.5 / 1/272.0 / 1/247.7 / 1/216.5 / 1/182.2**。ART単独初当たりとは定義を分離。
- ART「激闘乱舞」: **1セット30G+α+継続バトル8G / 約+2.2枚/G**。
- 通常時ボーナス「宿命の刻」約 **113枚**、ART中「TURBO」約 **76枚**。
- 通常天井: **1599G**。到達時は **89%継続ART + トキストック1個**。
- `baseGamesPer50` は34.6～35.0G級の整理値を検索履歴上確認したものの、今回保存時に比較可能な高信頼直接表を再取得できず、推測転記せず **UNVERIFIED_AFTER_RESEARCH**。

### resetBehavior v0.7

- `gameCounterReset`: **CLEAR_ON_SETTING_CHANGE_CONFIRMED**。設定変更で1599G天井へのゲーム数をクリア。
- `modeAfterReset`: **設定変更時にモード再抽選**。
  - 低確: **54.9 / 53.8 / 51.0 / 48.0 / 44.0 / 40.0%**
  - 通常: **全設定30.0%**
  - 天国: **15.1 / 16.2 / 19.0 / 22.0 / 26.0 / 30.0%**
- `resetBenefits`: 設定変更時の天国スタート抽選。設定1で15.1%、設定6で30.0%。短縮天井は確認なし。
- `resetPenalties`: 設定変更で前日の天井進捗が消失。
- `resetDetection`: 設定変更後も液晶ステージを引き継ぐため、画面初期化による単純判別は不可。K-Naviはその後の演出から滞在モードを読む旨を記載。ガックンは本機固有根拠を確定できずUNVERIFIED_AFTER_RESEARCH。
- `powerCycleBehavior`: CrankySevenは設定変更や電源OFFがあっても液晶ステージ・同行キャラは変化しないと記載。ただし単純電源OFF→ONのみの天井カウンタ/内部モードは直接根拠未確定。
- `carryOverBehavior`: 据え置き時の1599G天井進捗・内部モード引継ぎは本機固有の直接明示を今回確定できずUNVERIFIED_AFTER_RESEARCH。
- 有利区間は制度導入前なので **NOT_APPLICABLE**。

## 時系列監査

- 2011-11-21群は前回閉鎖済み。
- HAZUSE新台カレンダー上の次枠2011-12-02を監査したが、今回の検索では同日導入の新規5号機パチスロ実機を確定できなかった。
- 2011-12-05には少なくとも「パチスロ北斗の拳 世紀末救世主伝説」と「パチスロ ぷよぷよ！」が存在するため、**12/05同日群は未閉鎖**。
- 後日へ進む前に12/05群をメーカー別一覧・K-Navi・HAZUSE・当時業界記事で横断して漏れを閉じる。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 625 / chronologicalFrontier 2011-12-05**から開始。
2. 2011-12-05同日群を継続監査する。
3. 最優先既知候補は **「パチスロ ぷよぷよ！」（タイヨーエレック）**。導入日・型式・repo重複を再確認し、未登録なら626件目候補として性能コア＋resetBehavior v0.7を収集。
4. 同時に12/05の他メーカー機をHAZUSE/K-Navi/業界記事/古いDBで横断し、同日群を閉じるまでは12/09以降へ進まない。
5. PARTIAL/UNVERIFIEDは機種名/型式/メーカー/シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/周期/モード/状態/ガックン/有利区間を組み替えて再探索。
6. 競合値は平均せずCONFLICT。一般則・別機種からの補完は禁止。

## 主要出典 — 今回取得日 2026-09-05

### パチスロ北斗の拳 世紀末救世主伝説
- HAZUSE: `https://hazuse.com/machine/pachislot/1S0777/`
- K-Navi 設定変更時モード移行率: `https://p-kn.com/slot/1512/36183/`
- CrankySeven 天井/設定変更: `https://www.crankyseven.com/sp/hokutonoken-seikimatu19-pc.htm`
- CrankySeven 機種解析: `https://crankyseven.com/hokutonoken-seikimatu-pc.htm`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/131/a.php`
- 中一商事: `https://www.nakaiti.com/html/sSammy164.html`
- アタリ7: `https://www.atari7.com/slot/date1320203826.php`
- 北斗シリーズ回顧: `https://hyakuretsu.com/sammy_hokutonoken_kyudai_shindai/`

### 12/02時系列監査
- グリーンべると 2011-12-02記事: `https://web-greenbelt.jp/00002470/`
- HAZUSE新台カレンダー: `https://hazuse.com/new-machine-calendar/newmachine-calendar/`

### 今回のGitHub commit
- 625番レコード追加: `ef6ec33e73a89ff3d2a9ed04c5b1b60c348be11e`

### 次回順序確認
- **2011-12-05同日群継続 → 「パチスロ ぷよぷよ！」repo重複確認 → 未登録なら626件目候補。**
