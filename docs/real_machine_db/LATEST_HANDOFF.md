# 実機DB 最新リレー引継ぎ

更新日: 2026-08-31

## 現在地点

- 最新mainのREADME全文、最新ミッション v0.7、INDEX、LATEST_HANDOFF、既存レコードを再確認して継続。
- INDEXは旧19件地点のまま。README規定どおりLATEST_HANDOFFを進捗正本とする。
- **LATEST_HANDOFF基準141件。**
- 140件目 `俺の名はルパン三世` の次、前handoff指定どおり2007-07-17〜07-22境界をメーカー横断で監査。今回確認した導入予定/機種一覧では本線へ追加すべき未処理5号機を確定できず、2007-07-23群へ前進。
- 2007-07-23群のうちNET公式でも2007年7月製品として確認できる `ハワイ` を141件目として登録。
- 既存性能値はやり直さず、新規機の性能コア + v0.7 resetBehaviorを収集。

## 今回新規追加

### ハワイ（ネット）

- `docs/real_machine_db/machines/2007-07-23_hawaii.md`
- releaseDate: `2007-07-23`（ALL7導入予定。NET公式/P-WORLD/PachinkoVistaはいずれも2007年7月で整合）
- 型式名: `ハワイⅠ`（P-WORLD）
- systemType: ノーマル / ボーナス主体 / 完全告知
- coreStatus: `PARTIAL`
- qaResetBehavior: `PARTIAL`
- 後発 `ハワイ-30`（2007年9月）およびIGT `ハワイっ娘` は別機種として混在させない。

### 性能コア

- K-Navi BIG: `1/284 → 1/235`（設定1/3/5/7）
- K-Navi REG: `1/334 → 1/295`
- K-Navi合算: `1/153 → 1/131`
- PachinkoVistaは設定3/5/7が一致する一方、設定1のみ `REG 1/344・合成1/158`。K-Navi `1/334・1/153` と競合するため `CONFLICT`。
- 機械割も大きな資料差あり。
  - K-Navi: `95.8 / 98.1 / 102.6 / 107.5%`
  - 5号機クロニクル: `97.6 / 100.3 / 105.2 / 110.7%`
  - 平均化せず `CONFLICT` として双方保持。
- BIG: 345枚超払い出し終了、実獲得目安約312枚。
- REG: 119枚超払い出し終了、実獲得目安約104枚。
- RT/ART非搭載のボーナス主体ノーマル機。
- 50枚ベースは `ハワイ / ハワイⅠ / NET / ネット` と `1000円/50枚/ベース/コイン持ち/小役確率` を組み替え、公式・P-WORLD・K-Navi・PachinkoVista・5号機DB・残存資料を再探索したが、本機25Φ固有値を確定できず `UNVERIFIED`。

## v0.7 resetBehavior — ハワイ

- settingChangeBehavior: 設定変更時の本機固有内部状態/成立済み状態処理は、表記揺れ・型式名・メーカー名と検索語を変え、公式・P-WORLD・K-Navi・PachinkoVista・古いDB・回顧資料まで横断したがUNVERIFIED。
- carryOverBehavior: 通常時天井はNONE_CONFIRMED。据え置き時の本機固有内部状態引継ぎはUNVERIFIED。
- powerCycleBehavior: 電源OFF→ONのみの本機固有内部状態・表示挙動はUNVERIFIED。
- gameCounterReset: 通常時ゲーム数天井の存在自体が確認されないため、天井カウンタはNOT_APPLICABLE寄りのNONE_CONFIRMED。
- ceilingAfterReset: 短縮天井/朝一天井はNONE_CONFIRMED。
- modeAfterReset: 朝一専用/変更専用ゲーム数モードはNONE_CONFIRMED。
- stateAfterReset: 朝一専用高確・RT等はNONE_CONFIRMED。
- advantageousSectionReset: NOT_APPLICABLE。
- resetBenefits / resetPenalties: 設定変更固有の主要恩恵/不利はNONE_CONFIRMED。
- resetDetection: 本機固有のリールガックン、液晶/ハイビスカス挙動等による変更/据え置き判別は十分再探索後もUNVERIFIED。
- numericResetData: 朝一当選率、短縮G数、変更時モード振り分け等の公開数値はUNVERIFIED。

## 今回の主要出典

- NET公式 製品情報: https://www.net-fun.co.jp/product/page/7
- P-WORLD ハワイ: https://www.p-world.co.jp/machine/database/4785
- K-Navi ハワイ: https://p-kn.com/slot/613/
- PachinkoVista ハワイ: https://www.pachinkovista.com/pfactory/model.php?km=2&nid=016649
- 5号機クロニクル NET一覧: https://5goki.com/net
- ALL7.jp 2007年7月導入予定: https://www.all7.jp/plans/index/2007/07

取得日: 2026-08-31

## 今回GitHub反映

- `ハワイ` 新規追加: `7c0874a9fbdb578871192e960ff654102535866b`

## 次回再開地点

1. **2007-07-23群の残りを同じキューで継続する。**
2. 候補: `ハワイっ娘 / マジカルハロウィン / ジャンジャン飯店 / Bun Bun Maru`。各機を実パチスロ機・具体導入日・型式/メーカーまで別系統資料で確認してから登録する。
3. `ジャンジャン飯店` はK-Naviでコルモのパチスロ機として存在確認済み。設定別性能・RT100G・resetBehaviorを次回候補として掘る。
4. `ハワイっ娘` はIGTジャパン5号機として存在確認済み。パチマガスロマガに1000円あたりゲーム数 `39.82〜40.85G` が残存しているため、導入日と設定別ボーナス/機械割を別ソース照合する。
5. `マジカルハロウィン` はKPEの2007年7月5号機として存在確認済み。ART/朝一状態がホール経営物差しに重要なので、resetBehaviorは通常機より重点的に探索する。
6. `Bun Bun Maru` はALL7上で平和2007-07-23候補だが、同名固有名詞が多く検索ノイズが大きい。型式名・平和製品一覧・P-WORLD等でパチスロ機として独立確認できるまで登録しない。
7. `パチスロ北斗の拳2 乱世覇王伝 天覇の章` は7月下旬候補として具体納品日を継続監査する。
8. `ラーメン王` は過去handoffに日付競合があるため、再登場時に既存レコード有無と実導入日をGitHub mainで確認し、重複登録しない。
9. PARTIAL/UNVERIFIEDやリセット欠損は、表記揺れ・型式・メーカー・シリーズ名と `設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間` を組み替え、公式/業界/当時解析/古いDB/アーカイブ/回顧資料を十分再探索する。
10. INDEXは旧19件地点のため、README規定どおり**LATEST_HANDOFFの141件地点を正**として継続する。
