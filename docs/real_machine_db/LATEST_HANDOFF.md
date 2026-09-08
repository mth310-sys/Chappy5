更新日: 2026-09-09

## 現在地点
- recordCount: **1059**
- latestRecordAdded: **アナザーゴッドポセイドン-海皇の参戦-**（エレコ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-03-21_another-god-poseidon.md`
- chronologicalFrontier: **2017-03-21**
- frontierLatestMachine: **アナザーゴッドポセイドン-海皇の参戦- — No.1059**
- schema: **resetBehavior v0.7**
- status: **2017-03-21_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1058実レコードを取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを直近進捗正本として採用。
- 開始時mainは **1058件 / chronologicalFrontier 2017-03-13 / 2017-03-13_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 3/14～3/20境界は前handoffどおり主要導入カレンダー上で全国導入本線を固定できず、3/21群へ前進。
- 3/21群先頭候補 **「アナザーゴッドポセイドン-海皇の参戦-」** をNo.1059として追加。
- 性能コア＋resetBehavior v0.7を同時収集。欠損は表記揺れ・型式・メーカー・検定・設定変更/リセット/朝一/据え置き/電源OFF→ON/天井/モード/ガックン/RTへ検索語を変え、公式系・業界・当時解析・中古実機資料まで横断してからUNVERIFIED化。

## No.1059 — アナザーゴッドポセイドン-海皇の参戦-
- manufacturer: **エレコ**
- releaseDate: **2017-03-21**
- formalModelName: **アナザーゴッドポセイドンWP**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / 5.5号機期 / A+ART / CZ**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **98.8 / 99.7 / 101.1 / 104.0 / 106.5 / 設定6未公表**。
- 設定6機械割は当時解析で未公表。後年推定に**約112%**と**118%暫定**があり、canonicalにせずCONFLICT保持。
- GG初当たり: **1/553.0 / 511.3 / 490.1 / 407.3 / 378.5 / 241.5**。
- 50枚ベース: **約35.7G/50枚**（概要丸め約35G）。
- ART純増: **約2.0枚/G**。
- ART「GOD GAME」: **1セット50G+α**。
- 通常時天井: **1800GでGG**。G-ROADを挟んでも進捗有効、G-ROAD中はカウント停止。

### resetBehavior v0.7
- 設定変更: **天井RESET / GG抽選モードRESELECT / PZ高確抽選モードRESELECT / 深海モードCLEAR / ステージ=アッティカ / 出目=1・2・3 / RT0開始**。
- 純電源OFF→ON: **天井・GG抽選モード・PZ高確抽選モード・深海モードCARRYOVER**。
- 電断後2時間以上では表示上、ステージ=アッティカ、出目=1・2・3になるため、この2要素単独では設定変更確定にならない。
- 設定変更時GG抽選モードは**低確0%**。通常以上から開始し、高設定ほど天国準備/天国ショート/天国ロングの比率が上がる。
- GG抽選モード振り分け（設定1→6）:
  - 通常: **70.5 / 70.3 / 65.2 / 60.2 / 55.1 / 50.0%**
  - 天国準備: **19.9 / 21.1 / 22.7 / 24.2 / 25.8 / 27.3%**
  - 天国ショート: **4.3 / 7.4 / 10.5 / 13.7 / 16.8 / 19.9%**
  - 天国ロング: **0.4 / 0.8 / 1.2 / 1.6 / 2.0 / 2.3%**
  - 超天国: **全設定0.4%**
- PZ高確抽選モード設定変更時: **通常80.1 / 高確準備18.8 / 高確0.8 / 超高確0.4%**。
- 固定短縮天井はなし。1800Gのまま。
- 据え置き判別: 設定変更/ボーナス終了後がRT0、押し順黄7こぼしでRT1へ移る性質を利用し、RT1限定の押し順リプレイ停止形を中押しで見極める本機固有手順が一撃に存在。

### dataQuality / conflicts
- 2017-03-21導入は公式系告知・一撃・複数解析で一致。
- エレコ製は2017年1月の業界発表で確認。
- 型式名 `アナザーゴッドポセイドンWP` は中古実機/取説系複数資料で一致。
- 検定番号は十分な再探索後も高信頼な直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- `SETTING6_PAYOUT_UNPUBLISHED_WITH_CONFLICTING_ESTIMATES_APPROX_112_VS_118_PROVISIONAL` を保持。

## 2017-03-21群監査
- status: **OPEN**。
- 登録済み:
  - アナザーゴッドポセイドン-海皇の参戦- — No.1059。
- 前handoffの次候補:
  1. **攻殻機動隊S.A.C. 2nd GIG**
  2. **防空少女ラブキューレ**
  3. **ドキドキマンゴー**
- 2-9伝説の2017-03-21欄で上記群を確認済み。次回は個別公式/業界/当時解析で導入日と性能を再固定して順番に処理し、最後に3/21群を全メーカー横断監査する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-04_rock-you-queen-3.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05_gold-shio-30.md`。
- 今回は時系列本線を優先し、遡及QAカーソルは変更していない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1059を再取得。
2. **1059件 / chronologicalFrontier 2017-03-21 / 3/21群OPEN** を正本として継続。
3. 次の未処理候補 **「攻殻機動隊S.A.C. 2nd GIG」** をNo.1060候補として処理。
4. 続けて **防空少女ラブキューレ / ドキドキマンゴー** を処理。
5. 3/21群の全メーカー横断監査後にCLOSED可否を判定。
6. 遡及QAは `2006-05_gold-shio-30.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1059 アナザーゴッドポセイドン-海皇の参戦-
- ユニバ公式ブログ: https://ameblo.jp/aruzefreaks/entry-12257177708.html
- 娯楽産業: https://www.goraku-sangyo.com/%E3%83%A6%E3%83%8B%E3%83%90%E3%83%BC%E3%82%B5%E3%83%AB%E3%80%80%E7%A5%9E%E6%A9%9F%E7%A8%AE%E7%99%BA%E8%A1%A8%E4%BC%9A%E9%96%8B%E5%82%AC/
- Gamer 2017-03-21: https://www.gamer.ne.jp/news/201703210015/
- 一撃 機種概要: https://1geki.jp/slot/s_god_poseidon/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_god_poseidon/3/
- 一撃 据え置き判別: https://1geki.jp/slot/s_god_poseidon/49/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/32670/
- P-WORLD: https://www.p-world.co.jp/machine/database/8297
- pachislo-data: https://pachislo-data.com/eleco/32423
- 中一商事: https://www.nakaiti.com/html/sEleco097.html

### 3/21群監査 / 次候補
- 2-9伝説: https://29den.com/newslot/

### 遡及QA 次カーソル
- `docs/real_machine_db/machines/2006-05_gold-shio-30.md`
