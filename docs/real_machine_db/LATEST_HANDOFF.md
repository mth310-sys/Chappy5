# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **644**
- latestMachineAdded: **チャレンジマン**（岡崎産業）
- latestRecord: `docs/real_machine_db/machines/2012-03-05_challenge-man.md`
- chronologicalFrontier: **2012-03-05**
- frontierLatestExactDateMachine: **チャレンジマン**
- schema: **resetBehavior v0.7**
- status: **2012-03-05_SAME_DAY_GROUP_AUDIT_REQUIRED__NEXT_TENCHU_DEADLY_BLOW_ON_2012-03-05**

## 今回の本線追加 — チャレンジマン

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「女番長（スケバン）」を確認して開始。
- INDEXは旧地点（19件）のためREADME規定どおりLATEST_HANDOFFを進捗正本として使用。
- 開始時正本は **recordCount 643 / chronologicalFrontier 2012-03-05**。
- 直前handoff指定の最優先候補「チャレンジマン」をrepo検索し未登録を確認後、644件目として追加。

### 導入日・型式

- 時系列キー: **2012-03-05**。
- K-Navi・パチビーが2012-03-05導入開始で一致。
- 2012-02-20付グリーンべるとは3月4日から納品開始予定。納品日/ホール導入日の定義差として保持。
- P-WORLD・5号機クロニクル表記から formalModelName は **チャレンジマンA**。
- 検定番号は **UNVERIFIED_AFTER_RESEARCH**。

### 性能コア

- systemType: **ボーナス+ART / CZ搭載 / 天井ポイント型**。
- 機械割: **97.4 / 99.0 / 100.6 / 102.4 / 105.0 / 110.0%**。
- 赤7BIG: **全設定1/1285**。
- 青7BIG: **1/630 / 618 / 612 / 596 / 570 / 570**（P-WORLD丸め値）。
- BAR: **1/655 / 636 / 618 / 596 / 568 / 512**（P-WORLD丸め値）。
- ART初当たり: **1/697.5 / 689.7 / 676.3 / 676.4 / 676.3 / 662.1**。
- 50枚ベース: 表記・資料系統を変えて再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- ART「チャレンジゲーム」: **1セット30G+α / 純増約+1.3枚/G / 約50～90%ループ**。
- 赤BIG約300枚、青BIG約195枚、BAR約53枚。
- 天井は固定G数ではなくポイント制。ボーナスorART終了時に **50 / 200 / 230ポイント**から規定値を決定し、到達で「スーパーチャレンジタイム」。

### resetBehavior v0.7

- pacnk本機整理資料で **設定変更後は天井ポイント・CZポイントがリセットされ、状態は必ず通常へ移行**と記録。
- 当時一次/攻略本文での直接クロスチェックは未取得のため、`ANALYSIS_SINGLE_RETROSPECTIVE`として過剰に確度を上げない。
- `gameCounterReset`: **RESET_TENJO_POINT_AND_CZ_POINT_ON_SETTING_CHANGE__ANALYSIS_SINGLE_RETROSPECTIVE**。
- `modeAfterReset` / `stateAfterReset`: **通常状態へ移行**との整理解析あり。朝一専用モードは確認なし。
- `carryOverBehavior`: 据え置き時の天井/CZポイント保持を直接明記した本機固有資料は **UNVERIFIED_AFTER_RESEARCH**。通常仕様から推定転記しない。
- `powerCycleBehavior`: 単純電源OFF→ON時の天井/CZポイント・内部状態は **UNVERIFIED_AFTER_RESEARCH**。
- `resetDetection`: BET前の右停止ボタンで天井ポイント **0～230**、中停止ボタンでCZ連続非当選回数 **1～5**を7セグ確認可能。ただしガックン/初期出目や、朝一表示からの設定変更確定判別は **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井、朝一ART/CZ確定、高確保証等は **NONE_CONFIRMED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。

## CONFLICT / 定義差

- 今回、確定した数値CONFLICTなし。
- P-WORLDの青7BIG/BARは整数丸め、pacnkは精密値（例: 設定1 青BIG1/630.20、REG1/655.40）。丸め精度差のためCONFLICTにはしない。
- グリーンべるとの「3月4日納品開始予定」とK-Navi/パチビーの「3月5日導入」は日付定義差として平均しない。

## 時系列監査

- **2012-03-05同日群は未閉鎖**。
- 再探索でK-Navi・パチビーから **天誅～Deadly Blow～（ニューギン）** が2012-03-05導入と確認できた。
- repo検索では「天誅 Deadly Blow」/`tenchu`とも該当なし。
- したがって次回は03/05群を継続し、天誅～Deadly Blow～を645件目候補として最優先処理する。
- シスタークエスト3、女番長、チャレンジマンは03/05群で登録済み。天誅追加後もK-Navi/P-WORLD/HAZUSE/パチビー/当時業界記事で同日残存を再監査し、閉鎖確認後のみ03/09以降へ進む。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 644 / chronologicalFrontier 2012-03-05**から開始。
2. **天誅～Deadly Blow～（ニューギン）** のrepo重複最終確認 → 性能コア+resetBehavior v0.7収集。
3. 天誅追加後、2012-03-05同日群の残存未登録5号機を再監査。
4. 03/05群閉鎖後のみHAZUSEカレンダー次枠 **2012-03-09** 以降へ前進。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井/モード/状態/ガックンを組み替えて再探索。競合値は平均せずCONFLICT。

## 主要出典 — 今回取得日 2026-09-05

- K-Navi チャレンジマン: `https://p-kn.com/slot/1597/`
- K-Navi チャレンジゲーム: `https://p-kn.com/slot/1597/36281/`
- P-WORLD チャレンジマンA: `https://www.p-world.co.jp/machine/database/6653`
- パチビー チャレンジマン: `https://www.pachibee.jp/machines/index/212020002`
- グリーンべると: `https://web-greenbelt.jp/00001315/`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/65/a.php`
- 5号機クロニクル 岡崎産業: `https://5goki.com/okazaki`
- pacnk チャレンジマン: `https://pacnk.com/slot/tools/sh_challengeman.html`
- 次候補 K-Navi 天誅～Deadly Blow～: `https://p-kn.com/slot/1568/`
- 次候補 パチビー 天誅～Deadly Blow～: `https://www.pachibee.jp/machines/about/212010001`

## GitHub commits

- machine record: `b947ffdadd7a662fdf201fe64ff7ac867556896a`
