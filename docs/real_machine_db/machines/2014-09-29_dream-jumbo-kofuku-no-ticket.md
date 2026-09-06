# ドリームジャンボ ～幸福のチケットを君に～

machineName: ドリームジャンボ ～幸福のチケットを君に～
manufacturer: JPS
releaseDate: 2014-09-29
releaseDatePrecision: exact_hall_start
generation: 5号機
systemType: AT / 擬似ボーナス / 完全告知
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_SOURCE_LIMITS_AND_INITIAL_HIT_CONFLICT

## identity

- K-Navi・パチビーでホール導入開始 **2014-09-29** を確認。
- PiDEAの2014-08-08発表会記事は納品予定日を **2014-09-28** とするため、納品日とホール稼働日を分離し、本DBのreleaseDateは2014-09-29とする。
- 型式名: **ドリーム幸福のチケットを君にジャンボBB**（PiDEA、中一商事実機資料）。
- manufacturer: **JPS**。
- 設定構成は通常の1〜6ではなく **設定1 / 2 / 4 / 5 / 6 / J**。設定3なし。設定Jはメーカー発表会で「期待度150%（出玉率非公表）」と説明された特殊設定。
- 数字形式の検定番号は、機種名・型式名・JPS・検定・4S表記を変えて業界記事・実機資料・古いDBを再探索したが、安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.19% |
| 2 | 98.66% |
| 4 | 99.86% |
| 5 | 108.89% |
| 6 | 112.95% |
| J | 非公表 |

- pacnkの精密値を主値として保存。
- スロパチクエストは **97.2 / 98.7 / 99.9 / 108.9 / 113.0%** と掲載し、丸め差の範囲で一致。
- PiDEAは設定Jを「期待度150%（出玉率は非公表）」とするため、150%を機械割として転記しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_PLUS_INDUSTRY_FOR_SETTING_J_NOTE

## initialHitBySetting

### AT初当たり

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/297.65 |
| 2 | 1/276.03 |
| 4 | 1/263.60 |
| 5 | 1/178.45 |
| 6 | 1/145.87 |
| J | 非公表 |

- pacnkおよび当時解析まとめで設定1 **1/297.65**、設定2/4/5/6 **1/276.03 / 263.60 / 178.45 / 145.87** を確認。
- スロパチクエストの機種まとめのみ設定1を **1/279.65** とする一方、設定2/4/5/6は一致する。設定1だけ桁並びが異なるため、推測訂正せず `CONFLICT_INITIAL_HIT_SETTING1_297_65_VS_279_65` として両値を保持し、複数資料が一致する1/297.65をcanonical主値に採用。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_WITH_SINGLE_VALUE_CONFLICT

## baseGamesPer50

- **約32.0G/50枚**。
- 当時解析で「千円あたり32.06〜32.01G」、後年天井整理でもコイン持ち約32Gを確認。
- 20円スロットの1000円=50枚基準の比較値として保存。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT「ジャンボーナス / ドリームジャンボーナス」: **約3.0枚/G**。
- P-WORLD、パチビー、PiDEA、中一商事で一致。
- confidence: INDUSTRY_PLUS_DATABASE_MULTI_SOURCE

## basicPayout

- AT「ジャンボーナス」: **1セット33G以上 / 純増約3.0枚/G**。
- 初回継続率: **50.00%**、2連目以降: **66.67%**（パチマガスロマガ）。
- 初期G数は33Gから。カウントアップファイヤーにより111G以上へ増加する可能性があり、ドリームルーレットでは極端な大量G数があり得る。
- 実機完全再現用の初期G数全振り分け・フリーズ賞等級全テーブルは収集対象外。
- confidence: ANALYSIS_HIGH_PLUS_INDUSTRY

## modeSpecificMinimumData

- パチマガスロマガは **通常時にモードや状態の概念は存在せず、毎ゲームAT抽選率は一定** と説明。
- 仮天井: **AT間767G+前兆**。到達時に **約60%でAT当選**。
- 仮天井非当選時はカウントアップファイヤー高確率状態へ移行し、次回ATの3桁初期G数選択率が上がるとする解析あり。
- 本天井: **AT間1466G+前兆**。AT確定、カウントアップファイヤー高確率/3桁開始優遇とする解析。
- 前兆最大: **32G**。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_SOURCE_LIMITS
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **天井までのゲーム数をリセット**。
- 設定変更時には **約2%で本前兆スタート**とする当時解析があり、その場合は32G以内AT確定かつAT初期ゲーム数が優遇される。
- 設定変更後はショートフリーズ発生率が通常時より上昇。
- 通常設定の設定変更時に、モード再抽選という形で管理される公開モード表は確認できない。本機は通常時にモード/状態概念なしとする解析のため `NOT_APPLICABLE_FOR_ORDINARY_MODE_REROLL`。
- 設定Jには設定変更直後の特殊挙動を示す当時実機検証・回顧があるが、メーカー公表の具体抽選率ではないため通常設定のresetBehaviorへ混ぜず別記する。
- confidence: ANALYSIS_HIGH_FOR_COUNTER_RESET_AND_PUBLIC_RESET_BEHAVIOR

### carryOverBehavior

- 設定変更時に天井Gがリセットされることは確認できたが、**据え置き時に767G仮天井・1466G本天井の内部G数をどの単位で完全保持するか**を直接明示する本機固有の解析対照表は固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定J据え置き実戦の当時記録は存在するが、特殊設定Jの挙動観測を通常設定の天井カウンタ契約へ拡張しない。
- 引き戻しサイドランプ状態等の据え置き時完全保持も `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- **設定変更なしの単純な電源OFF→ON**について、天井G、前兆、引き戻し状態、ショートフリーズ率の直接対照表を、`電源OFF ON / 電断 / 電源入切 / 据え置き / 朝一 / リセット` と機種名・型式名を組み替え、当時解析・古いDB・実機回顧まで再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き実戦から純電源OFF→ON契約を推測しない。

### gameCounterReset

- 設定変更時: **RESET**。
- 対象: AT間の仮天井767G / 本天井1466Gへ向かうゲーム数。
- 据え置き時: `UNVERIFIED_AFTER_RESEARCH`。
- 単純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- 通常の仮天井 **767G+前兆（約60% AT当選）**、本天井 **1466G+前兆**。
- 設定変更後だけ適用される固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- ただし約2%で朝一本前兆スタートという別の設定変更恩恵があるため、「リセット後は必ず通常天井まで同一挙動」とは扱わない。

### modeAfterReset

- 通常時は「モードや状態の概念なし、毎ゲームAT抽選一定」とするパチマガスロマガ解析を確認。
- 一般的な天国/通常A/B等の設定変更時モード振り分け: **NOT_APPLICABLE / NONE_CONFIRMED**。
- 仮天井スルー後のカウントアップファイヤー高確率状態はゲーム数救済の派生状態であり、朝一モード表とは別定義。

### stateAfterReset

- 設定変更時 **約2%でAT本前兆スタート**。
- それ以外の低確/高確等の開始状態表は、本機について通常時モード/状態概念なしとする解析に沿い `NONE_CONFIRMED / NOT_APPLICABLE_FOR_GENERIC_LOW_HIGH_STATE_TABLE`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更時、**約2%で本前兆スタート**。当該ATは初期ゲーム数優遇。
- 設定変更後ショートフリーズ率が上昇。
- 設定変更後最初のAT当選時、変更判別に使える専用音声が存在。
- 設定Jについては、設定変更直後に高確率でロングフリーズするという当時実機検証・回顧が複数あるが、公式の発生率を固定できないため `PERIOD_OBSERVATIONAL_SUPPORT_SPECIAL_SETTING_J` としてのみ保持。

### resetPenalties

- 通常設定について、設定変更時のみ適用される固定的な不利仕様は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定Jの特殊挙動は不利/恩恵を単純化せず、特殊設定仕様として分離。

### resetDetection

- **設定変更後1回目のAT初当たりの25%で「おはようございます」音声発生**。発生時は設定変更確定とする当時解析。
- ショートフリーズ発生率が設定変更後に約2倍となるため統計的推測材料だが、単発発生のみでの確定判別とはしない。
- 本機固有のガックン・初期出目・初期ステージ確定判別は、`ガックン / リール / 朝一出目 / 初期画面 / JPS` まで再探索したが `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData

- 朝一本前兆スタート: **約2%**（当時解析）。
- 設定変更後初回AT「おはようございます」音声: **25%**。
- ショートフリーズ発生率:
  - 通常: **1/419.45**
  - 設定変更後: **1/202.93**
- 設定変更後固定短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 仮天井: **767G+前兆 / 約60% AT当選**。
- 本天井: **1466G+前兆 / AT確定**。

### publicMorningNumbers

- **約2%**で朝一本前兆スタート。
- 初回ATの**25%**で変更確定音声。
- ショートフリーズ **1/202.93**（通常1/419.45）。
- 朝一客AIに使える公開数値として保存。

## resetBehavior 再探索メモ

- 表記揺れ: `ドリームジャンボ / ドリームジャンボ ～幸福のチケットを君に～ / ドリーム幸福のチケットを君にジャンボBB / JPS`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 電断 / 天井 / 767 / 1466 / 本前兆 / ショートフリーズ / おはようございます / ガックン / 設定J`。
- 資料系統: 業界発表、P-WORLD、K-Navi、パチビー、パチマガスロマガ、当時攻略ブログ、後年解析整理、実機販売資料、設定J実機検証/回顧。
- 据え置き・純電源OFF→ONの直接契約は十分な再探索後も固定できないため `UNVERIFIED_AFTER_RESEARCH`。

## missingFields

- numeric inspection number: `UNVERIFIED_AFTER_RESEARCH`
- carryOverBehavior exact contract: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleBehavior exact contract: `UNVERIFIED_AFTER_RESEARCH`
- setting J official reset probability table: `UNVERIFIED_AFTER_RESEARCH`

## conflicts

- `CONFLICT_INITIAL_HIT_SETTING1_297_65_VS_279_65`
  - pacnk / 当時解析: **1/297.65**
  - スロパチクエスト機種まとめ: **1/279.65**
  - 設定2/4/5/6は一致。平均せず両方を保存。
- 設定6機械割 **112.95% / 113.0%** は丸め精度差として扱い、実質競合にはしない。

## sources

取得日: 2026-09-07

- PiDEA X 発表会 / 型式 / 納品予定 / 設定J: `https://www.pidea.jp/articles/JPS%E3%80%8C%E3%83%89%E3%83%AA%E3%83%BC%E3%83%A0%E3%82%B8%E3%83%A3%E3%83%B3%E3%83%9C%E3%80%8D%E3%81%AF%E6%9C%80%E5%A4%A7AT%E3%82%B2%E3%83%BC%E3%83%A0%E6%95%B010000G%21%3F`
- K-Navi 導入日 / 基本情報: `https://p-kn.com/slot/2112/`
- パチビー 導入日 / AT基本性能: `https://www.pachibee.jp/machines/about/214090000`
- P-WORLD 基本システム / 純増: `https://www.p-world.co.jp/machine/database/7491`
- パチマガスロマガ ATフロー / モード状態概念なし / 継続率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/29/l.php`
- pacnk 設定別AT初当たり / 機械割 / 天井 / 設定変更天井リセット: `https://pacnk.com/slot/tools/sh_dreamjumbo.html`
- スロパチクエスト 機種まとめ / 天井 / 設定1初当たり競合値: `https://www.slopachi-quest.com/kisyubetsu/dream-jumbo/`
- スロパチクエスト 朝一設定変更: `https://www.slopachi-quest.com/article/dream-jumbo-reset/`
- 当時解析まとめ 朝一本前兆約2% / ベース / ショートフリーズ / 天井: `https://ameblo.jp/mpkhb1311/entry-11947179297.html`
- 楽スロ 天井 / コイン持ち後年整理: `https://rakuslo.com/dreamjabo-tenjyo.html`
- 中一商事 実機資料 / 型式: `https://www.nakaiti.com/html/jps003.html`
- こぜ6 設定J回顧: `https://koze6.com/archives/1046336145.html`
- セミータウン 設定Jリセット検証回顧: `https://ameblo.jp/semmy-kaiji/`

## QA

- 性能コア: `COMPLETE_CORE_WITH_SOURCE_LIMITS_AND_SETTING1_INITIAL_HIT_CONFLICT`
- resetBehavior: `COMPLETE_WITH_SOURCE_LIMITS`
- unknown values are not inferred.
- source conflicts are not averaged.
