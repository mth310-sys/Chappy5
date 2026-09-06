# パチスロ獣王 王者の帰還

machineName: パチスロ獣王 王者の帰還
aliases: 獣王 王者の帰還 / 獣王～王者の帰還～ / 獣王帰還
manufacturer: Sammy / サミー
modelName: 獣王ZS
approvalNumber: 3S0773
releaseDate: 2013-12-02
releaseDatePrecision: exact_day_multi_source

generation: 5号機
systemType: AT / 擬似ボーナス / CZ / ゲーム数管理CZ / 天井 / ゲーム数上乗せ+セットストック
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL

## identity

- Sammy公式が2013-10-28に新機種「パチスロ獣王 王者の帰還」の発売を告知。
- K-Navi / HAZUSEがホール導入開始日を **2013-12-02** と掲載。
- HAZUSEで型式名 **獣王ZS**、検定番号 **3S0773** を確認。
- confidence: OFFICIAL_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

HAZUSE系列:

| 設定 | 機械割 |
|---|---:|
| 1 | 97.2% |
| 2 | 98.6% |
| 3 | 100.4% |
| 4 | 105.0% |
| 5 | 110.3% |
| 6 | 116.9% |

- HAZUSEとみんスロは上記系列で一致。
- pacnkは **97.2 / 98.6 / 100.3 / 104.9 / 111.2 / 116.9%**。
- スロパチクエスト整理値は **97.2 / 98.6 / 100.4 / 105.0 / 111.3 / 116.9%**。
- 設定5は110.3 / 111.2 / 111.3%と差が大きく、単純な丸め差とは扱わず `CONFLICT_PAYOUT_SETTING5_110_3_VS_111_2_VS_111_3`。設定3・4も小差を safeguards に保持。
- confidence: CONFLICT_MULTI_SOURCE

## initialHitBySetting

### 獣BONUS初当たり

| 設定 | 確率 |
|---|---:|
| 1 | 1/263.2 |
| 2 | 1/261.5 |
| 3 | 1/250.3 |
| 4 | 1/229.3 |
| 5 | 1/224.2 |
| 6 | 1/223.4 |

### AT「サバンナチャンス」初当たり

| 設定 | 確率 |
|---|---:|
| 1 | 1/451.3 |
| 2 | 1/427.8 |
| 3 | 1/399.9 |
| 4 | 1/356.5 |
| 5 | 1/306.3 |
| 6 | 1/245.0 |

- K-Navi / HAZUSE / pacnk / スロパチクエストで一致。
- HAZUSEのボーナス+AT合成: **1/166.2 / 162.3 / 153.9 / 139.5 / 129.4 / 116.9**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約30.1G/50枚**。HAZUSE解析値。
- みんスロでは約30G/50枚で整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT「サバンナチャンス」: **約2.5枚/G**。
- Sammy公式はAT機であることを明示、K-Navi / P-WORLD / HAZUSEで純増約2.5枚/Gを確認。
- confidence: OFFICIAL_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- AT「サバンナチャンス」: 初当たり時 **50G+α**、2連目以降は40G保証の初期ゲーム数決定区間あり。
- P-WORLD / K-Navi / HAZUSEはいずれも基本ATを **50G+α・純増約2.5枚/G** と整理。
- 擬似ボーナス「獣BONUS」: 1stは9枚役15回、AT非当選時の一部で2ndへ移行しベルナビ10回。超BBはベルナビ10回。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は内部モードに応じ、特定ゲーム数到達時にCZ「獣王モード」を抽選する。
- HAZUSEで通常側の主要モードとして **モードA / B / C / 天国 / モーニング**を確認。
- CZ「獣王モード」は20G継続、AT期待度約40%。
- 通常A～Cの天井は **967G到達 + 最大32G前兆**（表示上最大999G相当）。
- 天国天井 **100G + 前兆**、設定変更専用モーニング天井 **600G + 前兆**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## ceiling

- 通常時最大天井は **ボーナス・AT間999G相当**でAT「サバンナチャンス」確定。
- HAZUSEの内部表現はモードA～C **967G + 最大32G前兆**。
- スロパチクエスト/みんスロでは最大999Gと整理され、定義は整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_MORNING_OR_HEAVEN_CONFIRMED__CEILING_SHORTENED_TO_MAX600_PLUS_PREMONITION__CARRYOVER_PREMONITION_USES_INTERNAL_YOIKOSHI_GAMES__POWER_STATE_PARTIAL
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更後は通常A/B/Cではなく **天国 or モーニング**へ移行する解析が複数の当時攻略資料で一致。
- モーニングは設定変更時のみ選択される特殊モード。
- これにより通常最大999G相当の天井は、設定変更後は **最大600G+前兆**まで短縮される。
- 朝一0G / 32G付近 / 50G付近 / 64G付近 / 100G付近でCZ「獣王モード」の前兆が出やすい。

### carryOverBehavior

- 当時攻略資料で、**据え置き時は宵越しゲーム数（内部本ゲーム数）に基づいた獣王モード前兆挙動をする**と確認。
- よって据え置きでは少なくともCZ規定G進捗に関係する内部G数が前日から機能する。
- 天井そのもの・内部状態・全モード契約を1:1で明記する一次解析は見つからないため、それ以上は推定しない。

### powerCycleBehavior

- 設定変更を伴わない単純 **電源OFF→ON** 時の天井G数、内部モード、内部状態、前兆テーブル保持/初期化を本機固有に直接明示した資料は、検索語と資料系統を変えて再探索しても確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き挙動から純電断を自動同一視しない。

### gameCounterReset

- setting change: **RESET_CONFIRMED_BY_MORNING_MODE_RESELECT_AND_SHORTENED_CEILING**。前日の通常最大999G進捗は設定変更後のモーニング/天国契約へ置換される。
- carry-over: **INTERNAL_YOIKOSHI_GAME_PROGRESS_EFFECT_CONFIRMED_FOR_CZ_PREMONITION**。
- power OFF→ON only: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更後は **天国100G+前兆 or モーニング600G+前兆**。
- 通常最大は967G+最大32G前兆（999G相当）なので、設定変更時は最大天井が明確に短縮。
- モーニング選択時の最大天井: **600G+前兆**。

### modeAfterReset

- 設定変更時は **天国 or モーニング確定**とする解析が複数当時資料で一致。
- 後年整理資料では **天国11% / モーニング89%**。2014年初期記事には振り分け未判明とする記録があるため、11/89は後続解析値として採用し出典時点差を明示。
- numeric confidence: ANALYSIS_HIGH_LATER_MULTI_SOURCE_WITH_DISCLOSURE_TIMING_NOTE

### stateAfterReset

- 低確/通常/高確/超高確等の **設定変更専用初期状態振り分け**は、K-Navi/パチマガ系の状態解析、古い攻略記事、回顧資料を再探索したが本機固有の確定値を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 最大天井が通常999G相当から **最大600G+前兆**へ短縮。
- 約11%で天国なら **100G+前兆以内にAT天井**。
- モーニングでも100G以内のCZ「獣王モード」当選率が高く、後年整理資料では約40%、別の初期攻略記事では「50G以内45%」、初期実戦記事では100G以内約60%という数値がある。
- CZ当選率の数値は時点/区間/実戦値が混在するため平均せず safeguards に保持。

### resetPenalties

- 設定変更により前日の深い通常天井進捗は消えるため、前日ハマリ台の純粋な宵越し天井狙いには不利。
- ただし本機は設定変更後にモーニング/天国へ移行し天井自体が大幅短縮されるため、朝一全体では強い恩恵が存在する。

### resetDetection

- **前日内部G数に対応するはずの据え置き前兆と、朝一0/32/50/64/100G付近に出やすい設定変更後のCZ前兆パターンの差**が、客側の変更/据え置き推測材料になる。
- ガックン、リール初期出目、液晶初期ステージ等での本機固有の確定変更判別は再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。
- 前兆挙動は判別材料であり設定変更確定演出とは扱わない。

### publicMorningNumbers

- 設定変更時モード: **天国11% / モーニング89%**（後続解析値）。
- 天国天井: **100G+前兆**。
- モーニング天井: **600G+前兆**。
- モーニング時100G以内CZ当選: 後年整理 **約40%**。
- 初期攻略資料: **50G以内に約45%でCZ当選**との記録あり。
- 2013-12-13の実戦値記事: **100G以内CZ当選約60%**。これは実戦値のため解析値とは分離。

## missingFields

- 単純電源OFF→ON時の天井G/モード/状態保持契約: UNVERIFIED_AFTER_RESEARCH。
- 設定変更時の低確/通常/高確/超高確の具体振り分け: UNVERIFIED_AFTER_RESEARCH。
- 本機固有のガックン/初期出目等による確定変更判別: NONE_CONFIRMED_AFTER_RESEARCH。

## conflicts / safeguards

- `CONFLICT_PAYOUT_SETTING5_110_3_VS_111_2_VS_111_3`: HAZUSE/みんスロ 110.3%、pacnk 111.2%、スロパチクエスト 111.3%。平均しない。
- payout設定3は100.4% vs 100.3%、設定4は105.0% vs 104.9%の小差あり。丸め/転記差の可能性があるが原数値を保持。
- 通常天井 **967G+最大32G前兆** と **999G** は内部到達Gと表示上最大到達の定義差でありCONFLICT化しない。
- 設定変更モード11/89は後続解析値。初期2014-01時点記事では「天国orモーニング確定との情報、具体振り分け未判明」とされていたため、公開時点差を明示。
- 朝一CZ当選率は **モーニング100G以内約40% / 50G以内45% / 実戦100G以内約60%** が混在。母集団・区間・解析/実戦値が異なるため平均しない。
- 2017年「獣王 王者の覚醒」、2019年「猛獣王 王者の咆哮」のリセット契約を本機へ流用しない。

## sources

取得日: 2026-09-06

- Sammy公式ニュース: https://www.sammy.co.jp/japanese/news/2013/95.html — 2013-10-28発売告知、AT機としての製品概要。
- K-Navi: https://p-kn.com/slot/1962/ — 導入日2013-12-02、獣BONUS/AT初当たり、AT 50G+α・純増約2.5枚/G、朝一攻略項目の存在。
- HAZUSE: https://hazuse.com/machine/pachislot/3S0773/ — 型式/検定番号/導入日、初当たり、50枚約30.1G、機械割、モード別天井、CZ/AT解析。
- HAZUSE AT/ART: https://hazuse.com/machine/pachislot/3S0773/genre/209/ — 内部モード/CZ/AT詳細。
- P-WORLD: https://www.p-world.co.jp/machine/database/7247 — 5号機AT、CZ20G、AT 50G+α・約2.5枚/G。
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/140/00.php — ゲーム性、CZ/擬似ボーナス構造。
- パチマガスロマガ状態示唆: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/140/ens03.php — 低確/高確/超高確と演出示唆。
- pacnk: https://pacnk.com/slot/tools/sh_jyuou2013.html — 初当たり/PAYOUT比較値。
- スロパチクエスト機種まとめ: https://www.slopachi-quest.com/kisyubetsu/zyuou/ — 設定変更/据え置き時前兆挙動、性能値、天井。
- スロパチクエスト設定変更挙動: https://www.slopachi-quest.com/article/zyuou-reset/ — 設定変更時0/32/50/100G付近、据え置き時は宵越し内部G数に基づく前兆。
- スロパチクエスト朝一: https://www.slopachi-quest.com/article/zyuou-reset-capture/ — 設定変更後天国orモーニング、天国11%、モーニング600G。
- 期待値見える化: https://slotjin.com/slot/jyuou-asaichi/ — 設定変更後天国orモーニング、各天井、朝一CZ挙動。
- スロットガーデン: https://xn--mckza4ard4ttb2d.com/juou — 後続解析の設定変更時 天国11%/モーニング89%、モーニング100G以内CZ約40%。
- kokoスロ: https://kslot.seesaa.net/article/392628260.html — 設定変更時天井600G、通常967G+最大32G前兆。
- 2013-12-13実戦記事: https://ameblo.jp/coffeebreak800/entry-11728902376.html — 当時実戦値100G以内CZ約60%、設定変更後600G付近天井。
- みんスロ: https://minslo.com/%E7%8D%A3%E7%8E%8B-%E7%8E%8B%E8%80%85%E3%81%AE%E5%B8%B0%E9%82%84/ — 導入日、約30G/50枚、純増、機械割比較。
