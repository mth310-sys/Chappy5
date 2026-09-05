# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **713**
- latestMachineAdded: **魁!!男塾 ～天挑五輪大武會編～**（ロデオ）
- latestRecord: `docs/real_machine_db/machines/2013-02-04_sakigake-otokojuku-tencho-gorin-daibukai.md`
- chronologicalFrontier: **2013-02-04**
- frontierLatestExactDateMachine: **魁!!男塾 ～天挑五輪大武會編～**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-02-04_GROUP__NEXT_MEGA_MILLIONAIRE_VENUS_VERSION**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2013-02-04_pachislo-ranma-1-2.md` を確認。
- `INDEX.md` は19件地点の古い集約状態。README規定どおり、より新しい `LATEST_HANDOFF.md` と実レコードを直近進捗の正本として優先。
- 開始時main正本は recordCount **712** / chronologicalFrontier **2013-02-04** / 02-04群OPEN。
- repo検索で未登録を確認後、**713件目: 魁!!男塾 ～天挑五輪大武會編～（ロデオ）** を追加。

## 今回追加 — 魁!!男塾 ～天挑五輪大武會編～

### 性能コア

- releaseDate: **2013-02-04**を時系列キー採用。K-Navi機種ページ/展示会速報が2月4日ホール導入、グリーンべると当時記事が2月3日納品開始予定。P-WORLD現行DB末尾は2013年01月表記のため `CONFLICT_RELEASE_MONTH` 保持。
- 型式名: **魁！！男塾2AS** / 検定番号 **2S1180**。
- systemType: **5号機 / ボーナス非搭載AT / ゲーム数上乗せ+セットストック+継続率**。
- 市場掲載機械割: **96.8 / 98.3 / 99.8 / 103.4 / 108.7 / 113.8%**。
- AT「魁!!RUSH」初当たり: **1/248.2 / 1/241.1 / 1/231.7 / 1/217.8 / 1/203.3 / 1/184.1**。
- AT「魁!!RUSH」: **1セット40G+α / 純増約+2.8枚/G / 最高80%継続**。
- 天井: **AT間1499G**。天井ATには **極玉 / 魁!!乱打 極**が付く。AT当選後の前兆中も天井到達判定有効。
- 50枚ベース: 機種名/型式/メーカーと50枚・1000円・1K・ベース・コイン持ち等を組み替え、P-WORLD/HAZUSE/パチマガスロマガ/K-Navi/当時攻略/後年DBを横断したが、比較可能な直接値を確定できず **UNVERIFIED_AFTER_RESEARCH**。

### 機械割CONFLICT

- P-WORLD/複数攻略系列: **96.8 / 98.3 / 99.8 / 103.4 / 108.7 / 113.8%**。
- 2013年当時別記事の「設定別シミュレート値」: **97.40 / 98.56 / 100.24 / 102.82 / 105.09 / 108.44%**。
- 設定4～6は丸め差では説明できないため平均せず `CONFLICT_DEFINITION_OR_SIMULATION_CONDITION` として両系列保存。

### resetBehavior v0.7

- 設定変更時: **天井消化G CLEAR_CONFIRMED**。
- 設定変更後の内部状態振り分け: **通常A 25% / 通常B 48% / 高確 25% / 超高確 2%**。
- 高確以上スタート合計: **27%**（公開4区分の単純合算）。
- 設定変更後の **決勝ストック当選率15%**。
- 設定変更後の決勝ストック当選時、早いゲーム数で前兆開始する公開数値あり。ただし資料間で **32G or 36G / 72G** と競合。平均せずCONFLICT保持。
- 設定変更専用の天井短縮: **NONE_CONFIRMED_AFTER_RESEARCH**。1499G天井を新規カウント。
- 液晶ステージ: **設定変更時も単純電源OFF→ON時もランダム再抽選**と当時攻略資料が明記。開始ステージ単独では変更/据え置き確定判別不可。
- 純据え置き時の1499G天井進捗、通常A/B/高確/超高確、決勝ストックの完全保持契約: **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ON時の内部天井G/状態/決勝ストックの保持契約: **UNVERIFIED_AFTER_RESEARCH**（液晶ステージ再抽選のみ確認）。
- 本機固有ガックン/初期出目: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。

### 変更判別上の注意

- 当時資料では朝一の夕方ステージ移行や決勝突入タイミングを変更推測材料としている。
- ただし液晶ステージは設定変更だけでなく電源ON/OFFでも再抽選されるため、開始表示単独を確定判別に昇格させない。
- 決勝前兆の朝一ゲーム数は32G/36G競合を保持し、72Gのみ一致。

## 2013-02-04同日群

K-Navi 2013年2月新台カレンダー上のパチスロ4機種:

1. パチスロ宇宙戦艦ヤマト2 ～テレサ、愛の導き～（山佐） — **登録済み / 711件目**。
2. パチスロ らんま1/2（SANKYO） — **登録済み / 712件目**。
3. 魁!!男塾 ～天挑五輪大武會編～（ロデオ） — **登録済み / 713件目**。
4. **メガミリオネア ヴィーナスヴァージョン（ラスター） — 次回最優先 / repo未登録確認済み**。

### メガミリオネア ヴィーナスヴァージョン 次回用アンカー

- K-Navi: **2013-02-04ホール導入開始**。
- K-Navi性能: ART初当り **1/265 / 184 / 242 / 156 / 250 / 146**、機械割 **96.5 / 98.9 / 103.1 / 105.9 / 109.5 / 109.6%**。
- K-Navi/P-WORLD/パチマガスロマガ: ART「メガゲーム」 **1セット50G / 純増約2.4枚/G**。
- 当時グリーンべると: ラスター製、2013年2月上旬納品予定。
- パチマガスロマガ機種メニューに **「天井・ヤメ時」「朝イチ・設定変更」**ページが現存するため、次回はこの導線を最優先でresetBehavior数値まで掘る。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 新規本線を止めず、QAリレーで継続。

## 次回再開地点

1. **recordCount 713 / chronologicalFrontier 2013-02-04 / 02-04群OPEN** から開始。
2. **2013-02-04「メガミリオネア ヴィーナスヴァージョン」（ラスター）** を最優先で性能コア+resetBehavior v0.7収集し、未登録なら714件目として保存。
3. 4機種処理後、02-04同日群をメーカー/業界/当時DBで残存監査してCLOSED判定。
4. K-Navi月間カレンダーでは次の既知パチスロ群は **2013-02-18「スカイガールズ～よろしく！ゼロ～」「メタルスラッグ3」「ヴァン・ヘルシング ハンティングラッシュ」**。02-05～02-17境界を別系統一覧で監査してから進む。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-06

### 魁!!男塾 ～天挑五輪大武會編～
- P-WORLD: `https://www.p-world.co.jp/machine/database/6954`
- P-WORLD / グリーンべると業界ニュース: `https://news.p-world.co.jp/articles/5640/greenbelt`
- K-Navi: `https://p-kn.com/slot/1790/`
- K-Navi 展示会速報: `https://p-kn.com/topics/exhibition/1036/`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/60/a.php`
- HAZUSE: `https://hazuse.com/machine/pachislot/2S1180/`
- 2-9伝説まとめ: `https://29den.com/otokojyuku/`
- 天井ハイエナ生活 当時攻略: `https://macerate.seesaa.net/article/318861333.html`
- 天井ハイエナ生活 シミュレート: `https://macerate.seesaa.net/article/356454701.html`
- crankyseven: `https://crankyseven.com/otokojuku-tentyo-pc.htm`

### 次候補 / 境界
- K-Navi メガミリオネア ヴィーナスヴァージョン: `https://p-kn.com/slot/1802/`
- P-WORLD メガミリオネア ヴィーナスヴァージョン: `https://www.p-world.co.jp/machine/database/6976`
- P-WORLD / グリーンべると発売記事: `https://news.p-world.co.jp/articles/5639/greenbelt`
- パチマガスロマガ メガミリオネア: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/luster_slot/22/luster_slot_22.php`
- K-Navi 2013年2月新台カレンダー: `https://p-kn.com/calendar/201302/`
