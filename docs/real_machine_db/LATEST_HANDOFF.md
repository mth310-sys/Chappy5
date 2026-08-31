# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のままなので、README規定どおり `LATEST_HANDOFF.md` を進捗正本とする。
- 直前の進捗正本は191件目 `元祖ハネスロ`。
- 2007-10-21同日漏れを再確認後、2007-10-22群へ前進。
- **192件目として `パチスロ湘南爆走族`（大一商会、2007-10-22発売）を追加済み。**
- 新規レコード: `docs/real_machine_db/machines/2007-10-22_pachislot-shonan-bakusozoku.md`
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `9ee7978eb1950e06c237e211c5762719651cc304`

## 192. パチスロ湘南爆走族

- manufacturer: 大一商会（Daiichi）
- formalModel: `パチスロ湘南爆走族V2`
- releaseDate: `2007-10-22（発売）`
- generation: 5号機初期
- systemType: ボーナス + CZ/RT / 50G RT「爆走モード」
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 導入時期

- 当時のパチスロ業界史更新記録に **2007/10/22発売** と明記。
- 5号機クロニクルも2007/10導入。
- P-WORLDで型式名 `パチスロ湘南爆走族V2` を確認。

### 性能コア

- 5号機クロニクルの設定別機械割: 設定1 `96.1%` / 設定2 `98.8%` / 設定5 `105.0%` / 設定6 `117.1%`。
- 当時業界史には `115.0%（とりあえず発表値）` と記録され、後年パチ7/5号機クロニクルの117.1%と競合。平均せず `CONFLICT` として双方保持。
- RT「爆走モード」: **50G 1セット、純増約+0.5枚/G**。K-Naviと中古実機系DBで一致。
- BIG: 400枚超払い出し終了 / 獲得約310枚。
- REG: 8回入賞または12Gで終了 / 獲得約70枚。
- 設定別BIG/REG確率はK-Navi現存ページ自体が未発表表示。機種名/型式/メーカー/確率表記を変えて当時解析・旧DB・回顧を再探索したが、今回安定照合できる設定別表を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 50枚/1000円ベースも同様に再探索したが確定値なし。

### 天井/CZとv0.7 resetBehavior

- 当時パチスロ業界史の「5号機・天井存在機種一覧」で、本機は **CZ突入系** に分類されている。
- よって通常時ゲーム数に関わる救済/CZ到達機構の存在を見落として「天井なし」とはしていない。
- ただし現存資料で具体的な天井G数・CZ発動条件を確定できず `UNVERIFIED`。
- settingChangeBehavior: CZ天井Gのリセット/短縮、専用モード、RT状態処理を示す直接資料 `UNVERIFIED`。
- carryOverBehavior: 据え置き時のCZ天井G引継ぎ、RT残G処理 `UNVERIFIED`。
- powerCycleBehavior: 電源OFF→ON時のCZ天井G/RT/状態の維持・初期化 `UNVERIFIED`。
- gameCounterReset: `CZ突入系天井あり` は確認、具体G数/変更時処理は `UNVERIFIED`。
- ceilingAfterReset: `UNVERIFIED`。
- modeAfterReset: 朝一専用/設定変更専用モード `NONE_CONFIRMED`（ただしCZ天井処理未確定のため完全不変とは断定しない）。
- stateAfterReset: CZ/RT関連状態の再抽選/初期化 `UNVERIFIED`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: 公開された朝一専用恩恵・不利数値 `NONE_CONFIRMED`。
- resetDetection: 本機固有ガックン/初期出目/液晶・ランプ差 `UNVERIFIED`。
- numericResetData: 公開朝一数値、短縮天井G、振り分け率 `NONE_CONFIRMED`。

### 主要出典

- パチスロ業界初まとめ 更新情報4: https://slothistory.com/kousin_kako04.html
- P-WORLD: https://www.p-world.co.jp/machine/database/4933
- K-Navi: https://p-kn.com/slot/656/
- 5号機クロニクル Daiichi: https://5goki.com/daiichi
- パチ7 5号機ハイスペック調査: https://pachiseven.jp/articles/detail/14268
- A-SLOT: https://www.a-slot.com/SHOP/daiichi1.html
- Daiichi旧公式ページ: https://daiichi777.jp/pachislot/szok/index.html

取得日: 2026-09-01

## resetBehavior 遡及QA

- 2006年5〜6月群は既補完機を重複改変せず通過済み。
- 2006年7月 `新造人間キャシャーン`、`花盛` は補完済み。
- 2006年7月 `大江戸漫遊記` はv0.7 resetBehavior遡及QA済み。
- `大江戸漫遊記` は既存性能status `PARTIAL` を維持し、resetBehaviorQA=`PARTIAL` を別管理。
- 次の最古resetBehavior欠損候補は **`電撃フランケン`（2006-07-24）**。現レコードにresetBehavior節がないことを確認済み。

## 10月本線監査メモ

- `哲也～雀聖と呼ばれた男～`: 10/9〜10内覧会、ホールデビュー11月中旬予定。10月本線へ誤挿入しない。
- `元祖ハネスロ`: 10/21納品開始で191件目登録済み。
- `パチスロ湘南爆走族`: 10/22発売で192件目登録済み。
- **`マジックモンスター2`: 当時記録で2007-10-22発売。main検索で独立レコードなし。次の最優先候補。**
- 同日順は資料精度で無理に時刻順を決めず、10/22群を漏れなく処理する。
- `CANスロ` は複数資料で2007/11のため11月キュー維持。

## 次回再開地点

1. **LATEST_HANDOFF基準192件地点から継続。**
2. 2007-10-22同日群の `マジックモンスター2` を、main既存有無→発売/納品日→性能コア→resetBehaviorの順で処理する。
3. 10/22同日・10/23以降に、より古い未登録機が見つかればそちらを優先する。
4. resetBehavior遡及QAは **2006-07-24 `電撃フランケン`** から再開。既存性能コアstatusは不用意に崩さず、resetBehaviorQAを別管理する。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電断/天井/モード/ガックン/有利区間を組み替え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断する。
6. 競合値は平均せず `CONFLICT`。別機種・後継機仕様は流用しない。
