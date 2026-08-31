# 実機DB 最新リレー引継ぎ

更新日: 2026-08-31

## 現在地点

- 最新mainのREADME全文、最新ミッション v0.7、INDEX、LATEST_HANDOFF、既存レコードを再確認して継続。
- INDEXは旧19件地点のまま。README規定どおりLATEST_HANDOFFを進捗正本とする。
- **LATEST_HANDOFF基準140件。**
- 139件目 `新世紀エヴァンゲリオン～まごころを、君に～` の次、前handoff指定どおり `俺の名はルパン三世` を140件目として登録。
- 既存性能値はやり直さず、今回新規機の性能コア + v0.7 resetBehaviorを収集。

## 今回新規追加

### 俺の名はルパン三世（平和 / オリンピア）

- `docs/real_machine_db/machines/2007-07-16_ore-no-na-wa-lupin-sansee.md`
- releaseDate: `2007-07-16`（グリーンべると当時記事の納品開始予定日）
- 型式名: `俺の名はルパン三世P`
- systemType: ボーナス + RT
- coreStatus: `COMPLETE_CORE`
- qaResetBehavior: `PARTIAL`
- HEIWA BROS側ルパンパネル / オリンピア側次元パネル等は同一性能機のパネル違いとして1件に統合し、二重計上しない。

### 性能コア

- S-BIG: `1/668.7 → 1/555.4`
- N-BIG: `1/668.7 → 1/555.4`
- BIG合算: `1/334.4 → 1/277.7`
- REG: `1/668.7 → 1/560.1`
- ボーナス合算: `1/222.9 → 1/185.7`
- 機械割: P-WORLD `94.9 / 97.5 / 101.5 / 103.4 / 105.2 / 107.0%`
  - K-Navi/旧攻略は設定1のみ `95.0%`。0.1ptの丸め差として双方保持。
- 50枚ベース: 当時業界記事で1000円あたり約 `36〜38G`（設定差あり）。
- S-BIG約300枚 + RT100G。
- N-BIG約300枚、RTなし。
- REG約150枚 + RT50G。
- RT増減は当時業界記事 `現状維持程度`、旧攻略 `微減`。数値平均せず表現差をCONFLICT注記。
- 通常時天井は旧攻略で `なし`。P-WORLD/K-Navi基本仕様にもゲーム数天井掲載なし。

## v0.7 resetBehavior — 俺の名はルパン三世

- settingChangeBehavior: S-BIG後/REG後RTの残G・内部RT状態を設定変更でどう処理するかは、表記揺れ/型式名/平和/オリンピア/HEIWABROSと検索語を変え、業界記事・P-WORLD・K-Navi・旧攻略・古いDB・後年資料まで横断したがUNVERIFIED。
- carryOverBehavior: 据え置き時のRT残G/内部RT状態引継ぎはUNVERIFIED。通常時天井は確認されないため通常時天井G引継ぎはNONE_CONFIRMED。
- powerCycleBehavior: 電源OFF→ONのみのRT残G/内部状態処理はUNVERIFIED。
- gameCounterReset: 通常時ゲーム数天井なしのためNOT_APPLICABLE寄りのNONE_CONFIRMED。
- ceilingAfterReset: 設定変更時短縮天井/朝一天井はNONE_CONFIRMED。
- modeAfterReset: 朝一専用/変更専用ゲーム数モードはNONE_CONFIRMED。
- stateAfterReset: RT中の設定変更/電断時状態処理はUNVERIFIED。
- advantageousSectionReset: NOT_APPLICABLE。
- resetBenefits / resetPenalties: 設定変更固有の確定恩恵/不利はNONE_CONFIRMED。
- resetDetection: 本機固有のガックン、液晶表示等による変更/据え置き判別は十分再探索後もUNVERIFIED。後年ルパン機の情報は流用しない。
- numericResetData: 設定変更時のモード振り分け、朝一当選率、短縮G数、変更時RT突入率等の公開数値はUNVERIFIED。

## 今回の主要出典

- グリーンべると: https://web-greenbelt.jp/00004178/
- P-WORLD: https://www.p-world.co.jp/machine/database/4814
- K-Navi: https://p-kn.com/slot/611/
- パチスロ救急車: https://www.eightbeat.com/slot99/kishu/a_gyou/o/orenonaLupin3/page_menu.html
- P-WORLD業界ニュース（グリーンべると転載）: https://news.p-world.co.jp/articles/2262/greenbelt
- 中一商事 中古実機資料: https://www.nakaiti.com/html/sOlympia20070717.html

取得日: 2026-08-31

## 今回GitHub反映

- `俺の名はルパン三世` 新規追加: `d25143ab6280dc91a7e5f04f87fc6d2b28f805ac`

## 次回再開地点

1. **2007-07-17〜07-22境界をメーカー横断で監査し、未処理5号機がなければ2007-07-23群へ進む。**
2. ALL7.jpの7月一覧では `2007-07-23` 候補として `Bun Bun Maru / ジャンジャン飯店 / ハワイ / ハワイっ娘 / マジカルハロウィン` を確認。パチンコ混在一覧なので各機が実際にパチスロかを別資料で確認してから登録する。
3. `ハワイ` はNET公式製品情報で2007年7月のパチスロ機として確認済み。次回、具体導入日・設定別性能・resetBehaviorを収集する。
4. `ハワイっ娘` は5号機クロニクルのIGT一覧で2007年5号機として存在確認済み。具体導入日と性能を別系統照合する。
5. `マジカルハロウィン` は2007年7月のKPE 5号機として存在確認済み。7/23導入予定の妥当性を業界/メーカー系で再確認する。
6. `Bun Bun Maru` と `ジャンジャン飯店` は名称混同・パチンコ同名機の可能性を排除してから、本線登録可否を確定する。
7. `パチスロ北斗の拳2 乱世覇王伝 天覇の章` は7月下旬候補として具体納品日を継続監査する。
8. `ラーメン王` は過去handoffに日付競合があるため、再登場時に既存レコード有無と実導入日をGitHub mainで確認し、重複登録しない。
9. PARTIAL/UNVERIFIEDやリセット欠損は、表記揺れ・型式・メーカー・シリーズ名と `設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間` を組み替え、公式/業界/当時解析/古いDB/アーカイブ/回顧資料を十分再探索する。
10. INDEXは旧19件地点のため、README規定どおり**LATEST_HANDOFFの140件地点を正**として継続する。
