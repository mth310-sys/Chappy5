# サイレントメビウス

machineName: サイレントメビウス
manufacturer: 岡崎産業
releaseDate: 2015-04-13
releaseDatePrecision: exact_hall_start
releaseDateNote: 業界一次資料は2015-04-12納品予定、パチマガスロマガ/P-WORLDは2015年4月表記。すろぱちくえすと及び天井DBが2015-04-13導入を明記し、P-WORLD掲示板にも同日実戦投稿があるため、実ホール導入日を2015-04-13でcanonical固定。納品予定日とホール導入日を分離する。
generation: 5号機
systemType: A+ART / ボーナス+セットストックART
modelName: サイレントメビウスS1
inspectionNumber: 4S0997
recordStatus: COMPLETE_CORE_WITH_SOURCE_LIMITS_AND_RESET_BEHAVIOR_V0_7

## identity

- メーカー: **岡崎産業**。
- 型式名: **サイレントメビウスS1**。
- 検定番号: **4S0997**（P-WORLD）。
- 業界一次資料は **2015-04-12納品予定**。実導入日は複数解析/旧DBで **2015-04-13** を確認。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE_FOR_RELEASE

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.5% |
| 2 | 97.6% |
| 3 | 100.0% |
| 4 | 103.3% |
| 5 | 105.6% |
| 6 | 109.2% |

- すろぱちくえすと、5号機クロニクル、pacnkで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

主要初当たりはART「メビウスタイム」初当たり。

| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/251.2 |
| 2 | 1/242.5 |
| 3 | 1/226.5 |
| 4 | 1/217.5 |
| 5 | 1/209.6 |
| 6 | 1/195.9 |

- pacnkの精密系列。すろぱちくえすとの丸め系列 **1/251 / 242 / 227 / 218 / 210 / 196** と整合。
- ボーナス合算はすろぱちくえすとで **1/255 / 251 / 243 / 232 / 224 / 222**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- 「50枚」「1000円」「千円」「コイン持ち」「ベース」及び機種名/型式名の組み合わせ、当時解析・旧DB・回顧資料を再探索したが、本機固有の比較可能な数値を固定できなかった。
- 実戦値からの逆算は採用しない。

## netIncrease

- ART「メビウスタイム」: **約1.3枚/G**。
- PiDEA/P-WORLD業界記事、P-WORLD機種DB、パチマガスロマガで一致。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- 赤7 BIG: **301枚**。
- 青7 BIG: **203枚**。
- REG: **42枚**。
- ART「メビウスタイム」: **1セット50G**、約1.3枚/G、セットストック型。
- 1回のセット上乗せ抽選で最大10セットの記録あり。
- confidence: INDUSTRY + DATABASE_HIGH

## modeSpecificMinimumData

- 天井: **ボーナスまたはART間900G消化でART1セット**。P-WORLD、すろぱちくえすとで一致。
- 通常時は高確/前兆に相当する内部状態を持つが、本DBではリセット比較に必要な範囲だけ保持する。
- BIG後は50%、REG後は100%で高確移行とする当時解析があるが、通常時状態移行の詳細テーブルは収集対象外。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_SOURCE_LIMITS
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- **設定変更後は天井までのゲーム数がリセットされる**ことを本機固有資料で確認。
- 天井カウンタ以外の内部高確/前兆/ARTストックの設定変更時契約は、検索語と資料系統を変えた再探索でも安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: ANALYSIS_SINGLE_FOR_COUNTER_RESET; UNVERIFIED_FOR_OTHER_STATE

### carryOverBehavior

- 設定据え置き時の天井カウンタ・内部状態・ARTストックの包括的な本機固有引継ぎ契約は、当時解析/旧DB/宵越し記事を再探索しても直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 「設定変更で天井Gがリセット」という事実から据え置き引継ぎを推定拡張しない。

### powerCycleBehavior

- 設定変更なしの純粋な **電源OFF→ON** 時について、天井カウンタ・内部状態・表示/リール初動を本機固有に説明する資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- 設定変更: **RESET_TO_0**。
- 据え置き: **UNVERIFIED_AFTER_RESEARCH**。
- 純電源OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。
- confidence: ANALYSIS_SINGLE_FOR_SETTING_CHANGE

### ceilingAfterReset

- 通常天井: **ボーナス/ART間900G**。
- 設定変更時に天井Gはリセット。
- **リセット専用の固定短縮天井は確認できず** `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset

- 規定ゲーム数解除型の通常A/B/天国といったゲーム数モードは確認されない。
- 設定変更専用モード/朝一専用モード及びその数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset

- 高確/前兆に相当する通常時内部状態は存在するが、**設定変更時の開始状態・振り分け**を本機固有資料で固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き/純電断時も同様に推定しない。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更専用の高確スタート、朝一ART優遇、専用モード、短縮天井など、客の朝一行動を左右する主要恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更により **前日までの天井ゲーム数進行が消滅**するため、前日ハマりを利用した宵越し天井狙いには不利。
- それ以外の設定変更専用出玉ペナルティは **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のガックン、リール初動、液晶表示、朝一ゲーム数挙動による変更判別契約は、検索語を「ガックン」「朝一」「設定変更」「電源」「据え置き」「宵越し」へ変えて再探索しても固定できず **UNVERIFIED_AFTER_RESEARCH**。

### numericResetData

- 設定変更時天井カウンタ: **0Gへリセット**。
- 通常天井: **ボーナス/ART間900G**。
- リセット専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時モード/状態振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 公開朝一当選率/期待度: **UNVERIFIED_AFTER_RESEARCH**。

## conflict / source control

- 導入時期は業界一次資料の **2015-04-12納品予定** と、実導入資料の **2015-04-13** を定義分離。CONFLICTではなく delivery vs hall-start の差として保持。
- すろぱちくえすとのART初当たりは整数丸め、pacnkは小数精密値で整合するためCONFLICT扱いしない。
- 50枚ベースは資料不足のため推定しない。
- 据え置き/純電断は一般的な5号機慣例から補完しない。

## sources

取得日: **2026-09-07**

1. PiDEA X / P-WORLD業界ニュース「岡崎『メビウス』ARTは最大10セット上乗せ」
   - https://www.pidea.jp/articles/%E5%B2%A1%E5%B4%8E%E3%80%8C%E3%83%A1%E3%83%93%E3%82%A6%E3%82%B9%E3%80%8DART%E3%81%AF%E6%9C%80%E5%A4%A710%E3%82%BB%E3%83%83%E3%83%88%E4%B8%8A%E4%B9%97%E3%81%9B
   - https://news.p-world.co.jp/articles/7227
   - 2015-02-19発表、2015-04-12納品予定、BIG/REG枚数、ART 1.3枚/G・50G・セットストック。
2. P-WORLD「サイレントメビウス」
   - https://www.p-world.co.jp/machine/database/7674
   - 型式サイレントメビウスS1、検定4S0997、2015年4月、機械割レンジ、ボーナス枚数、ART、天井900G。
3. すろぱちくえすと「サイレントメビウス 天井恩恵・狙い目・ヤメ時解析」
   - https://www.slopachi-quest.com/article/silent-mebius/
   - 2015-04-13導入、設定別ボーナス/ART/機械割、天井900G、高確情報。
4. すろぱちくえすと 機種別まとめ
   - https://www.slopachi-quest.com/kisyubetsu/silent-mobius/
   - 設定別性能、天井、ゲーム性。
5. pacnk「サイレントメビウス 設定判別ツール」
   - https://pacnk.com/slot/tools/sh_silentmebius.html
   - ART初当たり精密値、機械割、設定変更後は天井までのゲーム数がリセット。
6. 5号機クロニクル「岡崎産業 5号機全機種一覧」
   - https://5goki.com/okazaki
   - 2015年4月、設定別機械割を照合。
7. パチマガスロマガ「サイレントメビウス」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/74/a.php
   - 2015年4月、A+ART、ART純増約1.3枚/G・50G。
8. パチスロ天井一覧
   - https://smaslo.man-soft.com/slot-tenzyou-itiran/
   - 2015-04-13導入、天井900Gを補助照合。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- settingChangeStateDistribution: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- publicMorningNumericData: UNVERIFIED_AFTER_RESEARCH

## conflicts

- NONE_CONFIRMED_FOR_CORE_VALUES
