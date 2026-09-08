更新日: 2026-09-09

## 現在地点
- recordCount: **1060**
- latestRecordAdded: **パチスロ攻殻機動隊S.A.C. 2nd GIG**（サミー）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-03-21_ghost-in-the-shell-sac-2nd-gig.md`
- chronologicalFrontier: **2017-03-21**
- frontierLatestMachine: **パチスロ攻殻機動隊S.A.C. 2nd GIG — No.1060**
- schema: **resetBehavior v0.7**
- status: **2017-03-21_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1059実レコードを取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを直近進捗正本として採用。
- 開始時mainは **1059件 / chronologicalFrontier 2017-03-21 / 2017-03-21_GROUP_OPEN**。
- 前handoffの次候補 **「パチスロ攻殻機動隊S.A.C. 2nd GIG」** を既存重複検索後、No.1060として追加。
- 性能コア＋resetBehavior v0.7を同時収集。公式発売告知、HAZUSE型式DB、一撃、ちょんぼりすた、Pachiseven、後年整理DBを横断。
- 設定変更時500G短縮天井、通常/高確/超高確の朝一公開振り分け、純電断時の天井/状態引継ぎを固定。
- 一撃2017-04-24時点の純電断「状態調査中」と、後発解析の「状態引継ぎ」は数値矛盾ではなく公開時点差として処理。

## No.1060 — パチスロ攻殻機動隊S.A.C. 2nd GIG
- manufacturer: **サミー**
- releaseDate: **2017-03-21**
- formalModelName: **攻殻機動隊2／ZS**
- certificationNumber: **6S1408**
- generation/system: **5号機 / 5.5号機期 / A+ART / CZ**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.8 / 98.8 / 101.2 / 104.9 / 108.3 / 111.8%**。
- ボーナス合算: **1/249.2 / 245.5 / 241.8 / 228.3 / 217.7 / 208.1**。
- ART初当り: **1/441.9 / 429.5 / 399.1 / 321.8 / 290.3 / 285.2**。
- ボーナス+ART合算: **1/159.3 / 156.2 / 150.6 / 133.6 / 124.4 / 120.3**。
- 50枚ベース: **約32G/50枚**。
- ART「S.A.C.モード」単体純増: **約1.4枚/G**、ボーナス込み約**1.8枚/G**。
- ART初期ゲーム数: **50G+α**。
- SBB約300枚 / BIG約200枚 / REG約40枚。
- 通常天井: **ボーナス＆ART間900G+最大16G前兆でART**。

### resetBehavior v0.7
- 設定変更: **天井RESET / 500Gへ短縮 / 内部状態RESELECT**。
- 据え置き: **天井進捗・内部状態CARRYOVER**。
- 純電源OFF→ON: **天井進捗CARRYOVER / 後発解析では内部状態CARRYOVER**。
- 設定変更時内部状態振り分け: **通常74.6% / 高確25.0% / 超高確0.4%**。
- 高確以上スタート合計: **25.4%**。
- 朝一専用の長期モード/ゲーム数ゾーンモード: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- 設定変更/純電断後の液晶開始ステージは十分な再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有の確定的ガックン/ランプ/初期出目変更判別は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 前日G数が把握でき、500G付近で天井ARTが作動する場合は設定変更の強い推測材料。

### dataQuality / conflicts
- サミー公式は2017-01-25に発売告知、3月中旬全国稼働予定を公表。
- 2017-03-21導入はHAZUSE・一撃・ちょんぼりすた・Pachisevenで一致。
- 型式 `攻殻機動隊2／ZS`、検定番号 `6S1408` はHAZUSEで直接確認。
- 性能コア、900G通常天井、500G設定変更天井は複数解析で一致。
- 一撃の設定4ボーナス+ART合算1/133.6と、ちょんぼりすた概要の1/134は精密値/丸め差でありCONFLICTにしない。
- material conflict: **NONE_CONFIRMED**。

## 2017-03-21群監査
- status: **OPEN**。
- 登録済み:
  - アナザーゴッドポセイドン-海皇の参戦- — No.1059。
  - パチスロ攻殻機動隊S.A.C. 2nd GIG — No.1060。
- 前handoffから残る未処理候補:
  1. **防空少女ラブキューレ**
  2. **ドキドキマンゴー**
- 次回は **防空少女ラブキューレ** をNo.1061候補として個別公式/業界/当時解析で導入日と性能を再固定し、その後ドキドキマンゴーを処理。
- 上記処理後、2017-03-21群を全メーカー横断監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-04_rock-you-queen-3.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05_gold-shio-30.md`。
- 今回は時系列本線を優先し、遡及QAカーソルは変更していない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1060を再取得。
2. **1060件 / chronologicalFrontier 2017-03-21 / 3/21群OPEN** を正本として継続。
3. 次の未処理候補 **「防空少女ラブキューレ」** をNo.1061候補として性能コア＋resetBehavior v0.7で処理。
4. 続けて **ドキドキマンゴー** を処理。
5. 3/21群の全メーカー横断監査後にCLOSED可否を判定。
6. 遡及QAは `2006-05_gold-shio-30.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1060 パチスロ攻殻機動隊S.A.C. 2nd GIG
- サミー公式発売告知 2017-01-25: https://www.sammy.co.jp/japanese/news/2017/628.html
- HAZUSE 機種概要/型式/検定番号: https://hazuse.com/machine/pachislot/6S1408/genre/209/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/6S1408/genre/201/
- 一撃 機種概要: https://1geki.jp/slot/s_kokaku2/
- 一撃 ボーナス確率: https://1geki.jp/slot/s_kokaku2/1/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_kokaku2/3/
- 一撃 ART概要: https://1geki.jp/slot/s_kokaku2/81/
- 一撃 ボーナス概要: https://1geki.jp/slot/s_kokaku2/61/
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/32413/
- Pachinavi: https://pachinavi.net/machines/koukaku-sac-2nd/
- Pachiseven: https://pachiseven.jp/machines/5081/cutout/2

### 3/21群監査 / 次候補
- 前handoffで確認済みの2017-03-21群: 防空少女ラブキューレ / ドキドキマンゴー。

### 遡及QA 次カーソル
- `docs/real_machine_db/machines/2006-05_gold-shio-30.md`
