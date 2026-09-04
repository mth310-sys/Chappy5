# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **645**
- latestMachineAdded: **パチスロ銀河鉄道999**（山佐）
- latestRecord: `docs/real_machine_db/machines/2012-03-12_ginga-tetsudo-999.md`
- chronologicalFrontier: **2012-03-12**
- frontierLatestExactDateMachine: **パチスロ銀河鉄道999**
- schema: **resetBehavior v0.7**
- status: **2012-03-12_SAME_DAY_GROUP_AUDIT_REQUIRED**

## 今回の同期修正

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、既存03/05レコードを確認して開始。
- INDEXは旧地点19件のままなので、README規定どおりLATEST_HANDOFFを進捗正本として使用。
- 開始時handoffはrecordCount 644 / frontier 2012-03-05で「天誅～Deadly Blow～を次候補」としていたが、GitHubの最新コミット履歴とファイル直接fetchで、天誅は既に641件目として `d3fa4654e5733b504b614f1122545f6ef47b4081` で登録済みと判明。コード検索の索引遅延によるhandoff後退だったため重複追加しなかった。
- 天誅既存レコードの未取得だった設定別ART初当たりをパチビー直接表から補完し、recordStatusを `COMPLETE_CORE_RESET_RESEARCHED_PARTIAL` へ更新。commit `58dee5960a8008d83f7d9d84c020aadc4f9d1853`。
- 03/05同日群は天誅、シスタークエスト3、女番長、チャレンジマンまで登録済みとして閉鎖監査。03/09について具体的な未登録パチスロを確定できず、次の具体日付き候補へ前進した。

## 今回の本線追加 — パチスロ銀河鉄道999

### 導入日・型式

- 時系列キー: **2012-03-12**（K-Naviホール導入開始）。
- 山佐公式は2012年3月稼働。
- 2012-02-07付グリーンべるとは「3月下旬納品開始予定」としており、予定変更または日付定義差の可能性があるため平均せず記録。
- formalModelName: **パチスロギンガテツドウ999S**。
- approvalNumber: **1S1242**。

### 性能コア

- systemType: **A+ART / ボーナス+ART / 天井あり**。
- 機械割: **96.8 / 98.9 / 100.9 / 104.1 / 108.9 / 115.2%**。
- BIG合算: **1/394.8 / 390.1 / 385.5 / 381.0 / 376.6 / 372.3**。
- CHALLENGE BONUS: **1/606.8 / 585.1 / 564.9 / 537.1 / 520.1 / 492.7**。
- ART初当たり: **1/368.6 / 299.2 / 328.0 / 261.7 / 287.7 / 230.7**。
- 50枚ベース相当（パチマガスロマガ1000円あたり）: **35.00 / 35.04 / 35.09 / 35.14 / 35.20 / 35.28G**。
- ART純増: 約**+1.5枚/G**。
- ギャラクシーモード: **1セット30G**。
- ギャラクシーエクスプレス: **1セット30G+α**。
- PREMIUM約24枚 / BIG約203枚 / CHALLENGE約49枚。
- 通常天井: **999G**で「命の火解放モード」。

### resetBehavior v0.7

- パチ＆スロ必勝本の本機固有解析で、通常時は複数の高確状態を持ち、**設定変更時にも高確移行抽選が行われる**ことを確認。設定変更が内部状態へ作用する点はCONFIRMED。
- 設定変更時だけの具体的な高確移行率/振り分けは今回取得本文では確定できず、全通常モード移行表はミッション範囲外なので収集しない。
- `gameCounterReset`: 999G天井カウンタの設定変更時CLEAR/RETAINは、表記揺れ・型式・メーカーとリセット/朝一/据え置き/宵越し/電源OFF ON/999G/ガックンを組み替えて再探索後も本機固有仕様の直接根拠を確定できずUNVERIFIED_AFTER_RESEARCH。
- `carryOverBehavior`: 実戦記録には宵越し天井狙い例があるが、仕様資料ではないため引継ぎ確定根拠に格上げせずUNVERIFIED_AFTER_RESEARCH。
- `powerCycleBehavior`: UNVERIFIED_AFTER_RESEARCH。
- `ceilingAfterReset`: 通常999G。設定変更専用短縮天井はNONE_CONFIRMED_AFTER_RESEARCH。
- `modeAfterReset/stateAfterReset`: 設定変更時の高確移行抽選あり。具体振り分けはUNVERIFIED_AFTER_RESEARCH。
- `resetDetection`: ガックン/初期出目/液晶による判別はUNVERIFIED_AFTER_RESEARCH。
- `advantageousSectionReset`: NOT_APPLICABLE_5TH_GEN。

## 時系列監査 / 次回再開地点

1. **recordCount 645 / chronologicalFrontier 2012-03-12**から開始。
2. 2012-03-12同日群の残存未登録5号機をK-Navi/P-WORLD/HAZUSE/パチビー/当時業界記事で再監査。
3. 03/12群を閉鎖できた場合のみ、その次の具体日付き未処理5号機へ前進。
4. GitHubコード検索は新規ファイルの索引反映が遅れることがあるため、候補名検索だけで未登録と断定しない。handoff、コミット履歴、想定pathの直接fetchも併用して重複を避ける。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井/モード/状態/ガックンを組み替えて再探索。競合値は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- 山佐公式: `https://yamasa-next.co.jp/model_gt9/`
- K-Navi 銀河鉄道999: `https://p-kn.com/slot/1589/`
- K-Navi GE: `https://p-kn.com/slot/1589/36483/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6637`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/185/a.php`
- パチ＆スロ必勝本 通常時のモード: `https://p.hisshobon.jp/machine/1987/1/34031`
- グリーンべると: `https://web-greenbelt.jp/00001347/`
- 天誅 K-Navi: `https://p-kn.com/slot/1568/`
- 天誅 パチビー: `https://www.pachibee.jp/machines/index/212010001`

## GitHub commits

- 天誅 performance QA update: `58dee5960a8008d83f7d9d84c020aadc4f9d1853`
- 銀河鉄道999 machine record: `88c9733636a20240e9c39736d7f24257a02a9bfb`
