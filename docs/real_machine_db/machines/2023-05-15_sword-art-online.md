# スロット ソードアート・オンライン

recordNo: 1563
machineName: スロット ソードアート・オンライン
manufacturer: 大都技研
formalModel: Lスロット ソードアート・オンラインB2
inspectionCode: 2S1694
releaseDate: 2023-05-15
generation: 6.5号機 / スマスロ
systemType: AT / CZ→疑似ボーナス→ボスバトル→差枚数管理AT / 上位AT搭載
settings: 1 / 2 / 3 / 4 / 5 / 6

## payoutRateBySetting
- 設定1: 97.8%
- 設定2: 98.8%
- 設定3: 101.0%
- 設定4: 106.3%
- 設定5: 110.0%
- 設定6: 114.9%

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### CZ初当り
- 設定1: 1/154.6
- 設定2: 1/151.4
- 設定3: 1/145.3
- 設定4: 1/130.9
- 設定5: 1/122.9
- 設定6: 1/114.2

### ボーナス初当り
- 設定1: 1/356.2
- 設定2: 1/343.3
- 設定3: 1/321.1
- 設定4: 1/266.1
- 設定5: 1/236.3
- 設定6: 1/207.7

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約35G/50枚。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- SAO BONUS / AT「Sword Art Online」: 約2.5枚/G。
- 上位AT「ALfheim Online」: 約4.0枚/G。

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- SAO BONUS: 20G、約50枚目安。
- エピソードボーナス: 40G、約100枚目安。消化後のボスバトル勝利濃厚。
- AT「Sword Art Online」: 差枚数管理型。ボスバトル勝利後のLAST ATTACK BONUSで初期差枚数を決定し、100枚以上から開始。
- ボスバトル7戦目のヒースクリフ撃破で上位AT「ALfheim Online」へ移行。
- ALfheim Online: 15G+α、純増約4.0枚/G、ALO BONUS高確率状態。

信頼度: INDUSTRY + ANALYSIS_HIGH

## modeSpecificMinimumData
- CZ間天井: CZ間400G消化でCZ当選。
- CZスルー回数天井: 最大6スルー。7回目のCZでボーナス当選。
- ボーナス間天井: ボーナス間999G消化後、次回CZ当選時にボーナス当選。
- 初回ボスバトル敗北後はCZスルー回数天井が短縮され、次回3スルー以内にボーナス当選。
- 有利区間ランプ非搭載。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_PUBLIC_RESET_NUMBERS_AND_PARTIAL_POWER_CYCLE
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井RESET。
- 内部状態RESET。
- CZ間天井のゲーム数をランダムに短縮する抽選を実施。
- 設定変更専用のCZモードテーブル振り分けを実施。
- 設定変更専用の高確移行レベルシナリオ振り分けを実施。
- 設定変更後1回目のボーナスが「直撃」だった場合、エピソードボーナス当選率が優遇される。

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- 天井CARRY_OVER。
- 内部状態CARRY_OVER。
- CZモードテーブル等の内部管理については、設定変更時の専用再抽選が行われないため据え置き側は引継ぎ扱いとする高信頼解析を採用。

### powerCycleBehavior
- 純電源OFF→ONでは天井CARRY_OVERを機種固有比較資料で確認。
- 純電源OFF→ONでは内部状態CARRY_OVERを機種固有比較資料で確認。
- 純電源OFF→ON単独時のCZモードテーブルおよび有利区間そのものについて、設定変更/据え置き表とは独立した直接明示を高信頼資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的スマスロ挙動からの推測補完は行わない。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVERを確認。

### ceilingAfterReset
- 通常CZ間天井: 400G。
- 設定変更時は初回CZ間天井をランダムに短縮する抽選を行う。
- 公開資料では短縮後ゲーム数は固定値ではなくランダムとされ、完全な振り分け値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 一度CZに当選した後のCZ間天井は400G固定。
- ボーナス間999GおよびCZ6スルー天井は設定変更でRESET。

### modeAfterReset
- 設定変更時は専用のCZモードテーブルを再抽選。
- 高設定ほどテーブル5以上の選択率が優遇されることを高信頼解析で確認。
- 12テーブル×全設定の詳細表は実機完全再現用の粒度になるため本レコードでは転記せず、朝一挙動に必要な傾向のみ保存。
- 据え置き: CARRY_OVER扱い。
- 純電源OFF→ON単独の直接契約は `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更: RESET後、高確移行レベルシナリオを再抽選。
- 設定変更時の高確移行レベルシナリオ: A 12.4% / B 25.0% / C 31.3% / D 31.3%。CまたはDが合計62.6%。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVERを機種固有比較資料で確認。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 有利区間ランプ非搭載のためランプによる変更判別不可。
- 純電源OFF→ON単独の有利区間直接契約は `UNVERIFIED_AFTER_RESEARCH`。

### resetBenefits
- 初回CZ間天井が400Gより浅いゲーム数へランダム短縮される可能性がある。
- 高確移行レベルシナリオは設定変更時にC/D合計62.6%で開始。
- 設定変更後1回目のボーナスが直撃当選した場合、25%でエピソードボーナスに当選（全設定共通）。
- 設定変更専用CZモードテーブル抽選があり、高設定ほど上位側のテーブル選択率が高い。

### resetPenalties
- 前日の有利区間・天井進行・内部状態を失う。
- 設定変更専用の追加不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- CZ間400Gより浅いゲーム数かつレア小役以外の契機でCZに当選した場合、設定変更期待度UP材料。
- ただし短縮ゲーム数はランダムで、通常抽選によるCZ当選もあるため単独で確定判別不可。
- 有利区間ランプ非搭載のためランプ判別不可。
- 本機固有のガックン条件・発生率は、機種名・正式型式・メーカー・朝一/リセット/据え置き/ガックン等へ検索語を変更して再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 見た目だけでの確実な設定変更/据え置き判別法は `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData
- 設定変更時 高確移行レベルシナリオ:
  - A: 12.4%
  - B: 25.0%
  - C: 31.3%
  - D: 31.3%
  - C+D: 62.6%
- 設定変更後1回目のボーナスが直撃時のエピソードボーナス当選率: 25%（全設定共通）。
- 通常CZ間天井: 400G。
- 設定変更時初回CZ間天井: 400G未満へランダム短縮抽選あり。完全振り分け値は未公開/未固定。

### publicMorningNumbers
- 設定変更時の高確シナリオC/D選択率: 合計62.6%。
- 設定変更後1回目の直撃ボーナス時エピソードボーナス率: 25%。
- CZ間天井短縮は発生するが、短縮G数の完全公開振り分けは `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `スロット ソードアート・オンライン / スマスロSAO / Lスロット ソードアート・オンラインB2 / 2S1694 / 大都技研` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電源オンオフ / CZ天井 / 天井短縮 / CZモードテーブル / 高確移行レベル / ガックン / 有利区間 / 判別` を組み替えて検索。
- 大都技研発表を伝える業界記事、P-WORLD/遊技日本、グリーンべると、HAZUSE、なな徹、一撃、パチマガスロマガ、必勝本、K-Navi、2023年当時攻略資料を横断。

## conflicts
- 一部二次資料に下位AT純増を約2.0枚/Gとする記載があるが、業界発表・複数解析・機種DBは約2.5枚/Gで一致。約2.5枚/Gをcanonicalとし、約2.0枚/Gは `CONFLICT_SECONDARY_TYPO_OR_DEFINITION_ERROR` として扱う。
- 導入地域について、一部資料は北海道・九州等を2023-05-22以降とする。全国canonical導入日は業界発表・導入記事に基づき2023-05-15とし、地域差は独立派生機ではないため別レコード化しない。

## sources
取得日: 2026-09-13

- 遊技日本 / P-WORLD業界ニュース: https://news.p-world.co.jp/articles/23837/nippon
  - 型式 `Lスロット ソードアート・オンラインB2`、設定別CZ/ボーナス/出玉率、AT純増、ボーナス獲得目安、2023-05-15導入。
- グリーンべると / P-WORLD: https://news.p-world.co.jp/articles/24079/greenbelt
  - 2023-05-15ホール導入開始、大都技研スマスロ第2弾、基本ゲームフロー。
- グリーンべると 検定通過: https://web-greenbelt.jp/post-69689/
  - 型式 `Lスロット ソードアート・オンラインB2` の検定通過を確認。
- HAZUSE: https://hazuse.com/machine/pachislot/2S1694/genre/202/
  - 検定番号 `2S1694`、正式型式、導入日、純増、機械割。
- パチビー: https://www.pachibee.jp/machines/index/223040000
  - 6.5号機スマスロAT、設定別数値、SAO BONUS 20G、エピソード40G、SAO 100枚以上、ALO 15G+α。
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/490/14840/
  - 設定変更/据え置きの有利区間・天井・内部状態、CZ天井短縮、CZモードテーブル、高確シナリオ、直撃時EPボーナス25%、有利区間ランプ非搭載。
- なな徹 天井: https://nana-press.com/kaiseki/machine/490/14838/
  - CZ間400G、設定変更後CZ間天井ランダム短縮、変更判別材料。
- 一撃 天井・設定変更: https://1geki.jp/slot/l_sao/3/
  - CZ間400G、CZ6スルー、ボーナス間999G、設定変更時のCZ天井ランダム短縮。
- パチマガスロマガ 天井: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/84/kr07.php
  - 3種類の天井、設定変更時のCZ天井ランダム短縮。
- パチスロメソッド（2023-05-13）: https://slotmethod.jp/archives/16726/
  - 電源OFF→ON時の天井・内部状態引継ぎを機種固有比較表で確認。
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/4040/1/92703
  - 設定別ボーナス/機械割、SAO BONUS/AT基本性能。
- K-Navi: https://p-kn.com/slot/3954/
  - 2023-05-15導入、設定別主要数値の照合。

## missingFields
- 設定変更時CZ間天井短縮の完全G数振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 純電源OFF→ON単独時のCZモードテーブル/有利区間直接契約: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックン条件・発生率: `UNVERIFIED_AFTER_RESEARCH`。

## status
coreStatus: COMPLETE_CORE
qaResetBehavior: COMPLETE_RESET_CORE_WITH_PUBLIC_RESET_NUMBERS_AND_PARTIAL_POWER_CYCLE
