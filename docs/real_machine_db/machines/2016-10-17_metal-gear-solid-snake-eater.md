machineName: パチスロ「メタルギア ソリッド スネークイーター」 / METAL GEAR SOLID SNAKE EATER
manufacturer: KPE / KPE・高砂販売
releaseDate: 2016-10-17
recordNumber: 1017
generation: 5号機 / 5.5号機期
systemType: 疑似ボーナス+ART / 自力継続型ART
formalModelName: メタルギアソリッド／KG
certificationNumber: 6S0635
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_MODE_STATE_PARTIAL

## identity
- コナミアミューズメント公式アーカイブで2016年10月稼働開始、5号機ART機を確認。
- 2016-07-19のK-Naviプレス発表会記事でKPE・高砂販売による新機種発表を確認。
- HAZUSEで導入開始日2016-10-17、メーカーKPE、型式名 `メタルギアソリッド／KG`、検定番号 `6S0635` を確認。
- 2016-08-19のPiDEA機械選定記事は納品10/16〜、当時攻略記事・導入カレンダーは10/17導入で一致するため、releaseDateは2016-10-17で固定。
reliability: OFFICIAL_INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 98.9% |
| 3 | 100.6% |
| 4 | 103.9% |
| 5 | 106.8% |
| 6 | 110.6% |
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
- 公開される「初当たり」は疑似ボーナス+ART初当たり合算。
| 設定 | 疑似ボーナス+ART初当たり |
|---:|---:|
| 1 | 1/266.9 |
| 2 | 1/258.6 |
| 3 | 1/251.1 |
| 4 | 1/240.4 |
| 5 | 1/232.7 |
| 6 | 1/220.2 |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約47G/50枚。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「スネークイーター作戦」: 約2.0枚/G。
reliability: OFFICIAL_ARCHIVE_SYSTEM_TYPE_PLUS_INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- BIG BONUS: 60G継続の疑似ボーナス。ART期待度は資料により約35〜38%。
- REG BONUS: 30G継続の疑似ボーナス。ART期待度約10%。
- ART「スネークイーター作戦」: ゲーム数不定の自力継続型。解析資料では平均約350G、期待獲得枚数約700枚の公表値紹介あり。
- 固定獲得枚数型ではないため、物差し用には継続G数/純増を主値とする。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常モード: A / B / C / D。高モードほど浅い規定G数天井が選ばれやすい。
- 通常時天井候補: 200G / 800G / 1280G。最大1280G到達時は最大32G前兆後にBIG / ART / スペシャルREGのいずれかが濃厚。
- 500G到達時はバーチャスミッション抽選、1000G到達時はサバイブミッション当選が濃厚とする解析あり。
- ボーナス/ART終了後50Gは引き戻し区間で、その間の初当たりはART確定とする解析あり。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_NUMERIC_RESET_DATA_MODE_STATE_PARTIAL
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時は通常時の天井進捗をRESETし、設定変更専用の天井ゲーム数振り分けで200G / 800G / 1280Gを抽選する。
- この天井抽選は通常モードに関係なく行われるとHAZUSEが明記。
- 内部モードA〜Dそのものが設定変更時にどのように初期化/再抽選されるかを直接明記した本機固有資料は、表記揺れ・型式名・メーカー名・リセット/朝一/モード検索を横断しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 高確等の内部状態についても設定変更専用の初期振り分けを固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き時は設定変更専用天井抽選を行わず、前日の天井進捗・内部モードをCARRYOVERする扱いが当時の朝一比較資料と整合。
- 据え置き専用の恩恵/不利は NONE_CONFIRMED_AFTER_RESEARCH。

### powerCycleBehavior
- 当時解析の朝一比較表では電源OFF→ONのみの場合、天井・内部モードともに引き継ぐ。
- 設定変更と純電源OFF→ONは明確に挙動が異なる。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRYOVER。
- 純電源OFF→ON: CARRYOVER。
- 最大天井: 1280G + 最大前兆32G。

### ceilingAfterReset
- 設定変更時は専用振り分けで200G / 800G / 1280Gを抽選。
- 通常時の設定別実質天井振り分けより200G/800G選択が大幅に優遇されるため、朝一リセット恩恵として有意。

### modeAfterReset
- 通常時にはモードA〜Dが存在し、設定別選択率も公開されている。
- ただし設定変更時のモードA〜D初期振り分けを直接固定できないため `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時の天井G数はモードに関係なく専用抽選される。
- 据え置き / 純電源OFF→ON: 内部モードCARRYOVERとする当時朝一資料あり。

### stateAfterReset
- 設定変更時の高確/通常など細分化内部状態の初期振り分けは `UNVERIFIED_AFTER_RESEARCH`。
- 通常時の全状態移行率はミッションv0.7上の収集対象外。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 設定変更後は200Gまたは800G天井の選択率が高く、通常時より浅い規定G数当選の期待が上がる。
- 200G天井選択率は設定1でも29.68%、設定4/6では39.06%。
- 800G天井までを合算すると、設定1で76.56%、設定6で79.69%が1280Gより手前の天井を選択する。

### resetPenalties
- 設定変更で前日の天井進捗を失う。
- 前日が有利な内部モードだった場合、その据え置き価値を失う可能性はあるが、設定変更時モード初期化契約を直接固定できていないため詳細は推測しない。

### resetDetection
- 当時解析では設定変更時のリールガックンは「なし」、スローモーション確認でも変更判別には使えないとされる。
- メーカー保証の設定変更確定契約ではないため `GACKUN_NOT_USEFUL_REPORTED_BY_CONTEMPORARY_ANALYSIS` として扱う。
- 天井G数の実当選位置は設定変更後の専用振り分けに由来するため、200G/800G当選は事後的な変更推測材料にはなるが確定判別ではない。

### numericResetData
設定変更時 天井ゲーム数振り分け:
| 設定 | 200G | 800G | 1280G |
|---:|---:|---:|---:|
| 1 | 29.68% | 46.88% | 23.44% |
| 2 | 32.62% | 44.92% | 22.46% |
| 3 | 29.68% | 46.88% | 23.44% |
| 4 | 39.06% | 40.63% | 20.31% |
| 5 | 34.37% | 43.75% | 21.88% |
| 6 | 39.06% | 40.63% | 20.31% |

参考: 通常時モード別天井振り分け（リセット専用値との比較用最小限）:
| モード | 200G | 800G | 1280G |
|---|---:|---:|---:|
| A | - | 0.39% | 99.61% |
| B | - | 25.00% | 75.00% |
| C | 25.00% | 50.00% | 25.00% |
| D | 100% | - | - |

## dataQualityNotes
- 性能コア、導入日、型式名、検定番号は公式/業界/複数解析で高一致。
- 初当たり1/266.9〜1/220.2は純ART単独ではなく「疑似ボーナス+ART」の合算値として保存し、別定義と混同しない。
- 設定変更時天井振り分けはHAZUSEと複数当時解析で一致。
- 電源OFF→ON時の天井/内部モード引継ぎは当時朝一解析で確認。
- 設定変更時の内部モードA〜Dそのもの、細分化内部状態の初期契約は十分な再探索後も直接固定できないためUNVERIFIEDとした。

## conflicts
- NONE_CONFIRMED_AFTER_RESEARCH。

## missingFields
- settingChange時の内部モードA〜D初期振り分け: UNVERIFIED_AFTER_RESEARCH
- settingChange時の高確等内部状態初期振り分け: UNVERIFIED_AFTER_RESEARCH
- メーカー保証の変更判別契約: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. コナミアミューズメント 公式機種アーカイブ — 2016年 パチスロ「メタルギア ソリッド スネークイーター」
   - https://www.konami.com/amusement/psm/archive/ps/2016/mgs_se/
2. K-Navi — 「メタルギア ソリッド スネークイーター」プレス発表会開催（2016-07-19）
   - https://p-kn.com/topics/exhibition/1496/
3. HAZUSE — メタルギア ソリッド スネークイーター（型式・検定番号・導入日・性能・天井・設定変更時振り分け）
   - https://hazuse.com/machine/pachislot/6S0635/
   - https://hazuse.com/machine/pachislot/6S0635/genre/201/
   - https://hazuse.com/machine/pachislot/6S0635/genre/207/
4. PiDEA — 三木流、メタルギアソリッドの評価は？（2016-08-19）
   - https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E3%83%A1%E3%82%BF%E3%83%AB%E3%82%AE%E3%82%A2%E3%82%BD%E3%83%AA%E3%83%83%E3%83%89%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
5. P-WORLD — パチスロ「メタルギア ソリッド スネークイーター」
   - https://www.p-world.co.jp/machine/database/8074
6. 期待値見える化 — メタルギアソリッド 天井・ゾーン・やめどき・狙い目解析
   - https://slotjin.com/zone/metalgearsolid/
7. すろぱちくえすと — メタルギアソリッド 朝一設定変更・リセット時の恩恵・挙動・狙い目
   - https://www.slopachi-quest.com/article/metal-gear-reset/
8. すろぱちくえすと — メタルギアソリッド 設定判別・設定差 解析まとめ
   - https://www.slopachi-quest.com/article/metal-gear-settei/
9. すろぱちくえすと — メタルギアソリッド 天井・ゾーン・設定判別 解析まとめ
   - https://www.slopachi-quest.com/kisyubetsu/metal-gear-solid/
10. ピロ式パチスロ記 — パチスロメタルギアソリッド 天井・解析情報等（2016-10-16）
   - https://piro-shiki.com/metalgearsolid-kaiseki/
