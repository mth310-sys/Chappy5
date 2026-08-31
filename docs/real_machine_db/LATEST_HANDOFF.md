# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を確認して継続。
- `INDEX.md` は旧19件地点のままなので、README規定どおり `LATEST_HANDOFF.md` を進捗正本とする。
- 189件目 `マッドジー` までを継承。
- 直前HANDOFFで最優先だった `CANスロ` は、スロリスクタイム/パチ7回顧で **2007/11導入**、2007-11-06付業界記事でもPB勉強会展示を確認したため、2007-10-09以前の候補ではないと判定。現時点では追加せず11月キューへ送る。
- `ナチユリ-30` はmain独立レコード未確認だったうえ、当時系パチスロ業界史更新記録に **2007-09-14発売** が残っていたため、漏れ防止ルールにより遡及追加。
- **190件目として `ナチユリ-30`（ニューギン）を追加済み。**
- 新規レコード: `docs/real_machine_db/machines/2007-09-14_nachiyuri-30.md`
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `a83fc955c71567cf5ce925d3986fc105235d21f0`

## 190. ナチユリ-30

- manufacturer: ニューギン
- releaseDate: `2007-09-14（当時発売記録） / 2007-10（後年DB）`
- generation: 5号機初期
- systemType: ノーマル / ボーナス主体 / 30φ / 準完全告知
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 導入時期

- 2007年当時のパチスロ業界史更新記録 `slothistory.com/kousin_kako04.html` は `ナチユリ-30` を **2007/9/14発売** と記録。
- 5号機クロニクルは25φを2007/7、30φを **2007/10** 導入として整理。
- 後年DBと当時具体発売日に月差があるため、平均・推測せず `CONFLICT` として双方保持。
- ファイル名は当時系具体日 `2007-09-14` を採用。

### 性能コア

- 設定別BIG合算: `1/372.4 → 1/273.1`
- REG: `1/318.1 → 1/223.7`
- 全ボーナス合算: `1/171.6 → 1/123.0`
- 機械割: `96.6 / 99.6 / 102.7 / 105.8 / 108.8 / 111.9%`
- 50枚ベース: `39.89 / 39.97 / 40.02 / 40.09 / 40.16 / 40.24G`
- 青7BIG: 規定払い出し345枚 / 純増約280枚
- 赤7BIG: 規定払い出し345枚 / 純増約280枚
- 白7BIG: 規定払い出し222枚 / 純増約180枚
- REG: 規定払い出し87枚 / 純増約72枚
- RT/ART等の付加機能なし。
- 当時グリーンべると記事の合成約1/172〜1/123、純増約280〜72枚、RT等付加機能なしと整合。

### v0.7 resetBehavior

- settingChangeBehavior: 通常時専用モード/天井/変更恩恵 `NONE_CONFIRMED`、本機固有リール初期化挙動 `UNVERIFIED`
- carryOverBehavior: 通常時ゲーム数天井・モード等 `NONE_CONFIRMED`
- powerCycleBehavior: 通常時固有変化 `NONE_CONFIRMED`、初期表示/リール挙動の変更との差 `UNVERIFIED`
- gameCounterReset: `NOT_APPLICABLE`（通常時ゲーム数天井なし確認範囲）
- ceilingAfterReset: `NOT_APPLICABLE / NONE_CONFIRMED`
- modeAfterReset: `NOT_APPLICABLE / NONE_CONFIRMED`
- stateAfterReset: `NOT_APPLICABLE / NONE_CONFIRMED`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits / resetPenalties: `NONE_CONFIRMED`
- resetDetection: 本機固有ガックン/初期出目/表示差 `UNVERIFIED`
- numericResetData: `NONE_CONFIRMED`
- パチマガスロマガ攻略トップは「攻め時・ヤメ時→特にナシ」。
- `ナチユリ / ナチユリ-30 / ナチユリ30 / ナチユリー30 / ニューギン` と設定変更/リセット/朝一/据え置き/電断/天井/モード/ガックン/変更判別を組み替え、当時業界・旧解析・旧DB・回顧資料まで再探索済み。

## 主要出典

### ナチユリ-30
- グリーンべると: https://web-greenbelt.jp/00004221/
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/02/a.php
- パチマガスロマガ ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/02/c.php
- パチマガスロマガ 攻略トップ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/02/newgin_slot_02.php
- 5号機クロニクル: https://5goki.com/newgin-excite
- パチスロ業界初まとめ 更新情報4: https://slothistory.com/kousin_kako04.html
- 旧保存スペック整理: https://pachinko.hatenablog.jp/entry/2007/07/nachiyuri

取得日: 2026-09-01

## 9月→10月境界監査メモ

- `ナチユリ-30` は当時具体日2007-09-14を確認したため190件目として遡及登録済み。後年2007/10表記はCONFLICT保持。
- `CANスロ` は現時点の複数資料で **2007/11**。2007-10前半候補から外し、11月キューで再監査する。
- `パチスロ湘南爆走族` はmain独立レコード未確認。当時パチスロ業界史更新記録で **2007-10-22発売** を確認、5号機クロニクルも2007/10。よって `マッドジー` 2007-10-08/09より後。
- `マジックモンスター2` も同じ当時記録で **2007-10-22発売**。
- `元祖ハネスロ` は前リレー確認の2007-10-21納品開始候補。
- したがって新規時系列本線は `マッドジー` 後の **2007-10-10〜20に未登録機がないか監査 → なければ元祖ハネスロ(10/21) → 湘南爆走族/マジックモンスター2(10/22)**。

## resetBehavior 遡及QA

- 2006年5〜6月群は既補完機を重複改変せず通過済み。
- 2006年7月 `新造人間キャシャーン` は補完済み。
- 2006年7月 `花盛` はv0.7 resetBehavior補完済み（commit `fe6a61d86ab1dbac3e703381115b18c5fbeae017`）。
- **次の最古resetBehavior欠損候補は2006年7月 `大江戸漫遊記`。** 現レコード `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md` の既存性能コアを不用意に再採掘せず、resetBehaviorのみ別管理で補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準190件地点から継続。**
2. まず2007-10-10〜20の発売/納品候補を、当時業界記事・旧発売一覧・アーカイブ・P-WORLD系年表で監査し、main独立未登録の最古機を追加する。
3. 10/10〜20に未登録がなければ `元祖ハネスロ`（オーイズミ、2007-10-21納品開始確認済み）を次候補とする。
4. その後 `パチスロ湘南爆走族` と `マジックモンスター2`（いずれも当時記録2007-10-22発売）をmain既存有無→性能コア→resetBehaviorの順で処理する。
5. `CANスロ` は2007/11キューへ移動し、10月中は先に処理しない。
6. resetBehavior遡及QAは **2006年7月 `大江戸漫遊記`** から再開。
7. PARTIAL/UNVERIFIEDは最初の検索で確定せず、表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電断/天井/モード/ガックン/有利区間を組み替えて資料系統を横断する。競合値は平均せず `CONFLICT`。
