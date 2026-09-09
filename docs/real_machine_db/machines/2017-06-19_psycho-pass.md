machineName: ぱちスロ PSYCHO-PASS サイコパス
manufacturer: KYORAKU（京楽産業.）
releaseDate: 2017-06-19
recordNumber: 1089
generation: 5号機 / 5.5号機世代
systemType: A+ART / CZ / リアルボーナス
formalModelName: パチスロサイコパスK
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_BASE_UNVERIFIED

## identity
- 京楽産業.の2017年5月15日発表を報じたグリーンべるとで、全国導入開始2017-06-19、A+ART機、メーカーKYORAKUを確認。
- 一撃、ちょんぼりすた、すろぱちくえすとも2017-06-19導入で一致。
- 型式名 `パチスロサイコパスK` は複数の中古実機流通資料で一致したため保持するが、公的検定資料を直接固定できていないため信頼度はANALYSIS_SINGLE相当。
- 検定番号は `PSYCHO-PASS / サイコパス / パチスロサイコパスK / 京楽 / 型式 / 検定番号 / 7S` 等へ検索語を変え、攻略・流通・検定通過系資料を横断したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: INDUSTRY_AND_ANALYSIS_HIGH_FOR_RELEASE_AND_MAKER; ANALYSIS_SINGLE_FOR_FORMAL_MODEL; UNVERIFIED_FOR_CERTIFICATION

## payoutRateBySetting
|設定|機械割|
|---:|---:|
|1|97.0%|
|2|98.4%|
|3|100.8%|
|4|103.5%|
|5|106.6%|
|6|111.5%|
- 一撃と複数解析資料で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART「執行RUSH」初当たり
|設定|ART初当たり|
|---:|---:|
|1|1/523.8|
|2|1/465.6|
|3|1/411.2|
|4|1/358.2|
|5|1/321.5|
|6|1/264.0|

### リアルボーナス合算
- 全設定共通: 約1/99.9。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- `UNVERIFIED_AFTER_RESEARCH`。
- 一撃の当時小役ページ自体が「50枚あたりの消化ゲーム数 現在調査中」。機種名/型式/京楽 + 50枚/1000円/ベース/コイン持ち/ゲーム数へ検索語を変えた再探索でも比較可能な直接値を固定できなかった。
- 小役確率から逆算しない。
reliability: UNVERIFIED

## netIncrease
- ART「執行RUSH」: 約1.9枚/G。ただしメーカー発表・一撃/P-WORLDともボーナス/特化ゾーン込みの表現であり、ART区間単体の純増値とは混同しない。
reliability: INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- リアルボーナス「サイコパスチャンス / サイコパスBONUS」: 実獲得約49枚（60枚を超える払い出しで終了）。
- ART「執行RUSH」: 初期100G以上、ゲーム数上乗せ型。
- ロングフリーズ時の初期500Gは特殊契機なので基本物差し値には混ぜない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- ART間のボーナス回数を管理し、11～14回目のボーナス後はCZ当選、15回目のボーナスでART当選。
- CZは「執行チャレンジ」約50%、「槙島チャレンジ」約70%のART期待度。
- ゲーム数天井ではなく、ART間ボーナス回数天井として扱う。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_STATE_DISTRIBUTION_AND_POWER_CYCLE_CONTRACT
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- ART間ボーナス回数天井: RESET。
- 内部状態: RESET / 再抽選。
- 液晶ステージ: 通常3ステージからランダム。
- ぱちログ: クリア。
- 設定変更時の内部状態振り分けは公開数値あり（numericResetData参照）。
reliability: ANALYSIS_HIGH_DIRECT_CONTEMPORARY_MULTI_SOURCE

### carryOverBehavior
- 「据え置き」と明示した本機固有の独立比較表は、検索語・資料系統を変えた今回の再探索では直接固定できず `UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH`。
- 純電源OFF→ONについては別項でART間ボーナス回数・内部状態の引継ぎを直接確認できるため、据え置き契約と混同せず保持する。
reliability: UNVERIFIED_FOR_DIRECT_STAY_SETTING_CONTRACT

### powerCycleBehavior
- ART間ボーナス回数天井: CARRYOVER。
- 内部状態: CARRYOVER。
- 液晶ステージ: 通常3ステージからランダム。
- ぱちログ: クリア。
reliability: ANALYSIS_HIGH_DIRECT_CONTEMPORARY_MULTI_SOURCE

### gameCounterReset
- settingChange: RESET（ART間ボーナス回数）。
- carryOver: UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH。
- powerOffOn: CARRYOVER（ART間ボーナス回数）。

### ceilingAfterReset
- standardCeiling: ART間ボーナス11～14回目後はCZ、15回目でART。
- resetCeiling: 上記ボーナス回数を0から再開。
- setting-change-specific fixed shortening: `NONE_CONFIRMED_AFTER_RESEARCH`。
- ゲーム数天井短縮という概念は本機の主要天井構造には該当しない。

### modeAfterReset
- 通常A/B等のゲーム数解除モードを主要構造とする機種ではない。
- 設定変更専用の朝一モード/モード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一に重要なのは内部状態（低確/高確/超高確）の再抽選。

### stateAfterReset
- 設定変更時は低確/高確/超高確を設定別に再抽選。
- 電源OFF→ONのみでは内部状態を引き継ぐ。
- 高設定ほど設定変更時に高確/超高確スタート率が高い。
reliability: ANALYSIS_HIGH_DIRECT_CONTEMPORARY_MULTI_SOURCE

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 設定変更後は高確/超高確から始まる可能性があり、ボーナス成立時のCZ/ART抽選上の朝一恩恵となり得る。
- 高確以上スタート率は設定1で17.2%、設定6で27.3%（公開振り分けの合算）。超高確単独は1.6%～3.9%。
- 天井短縮の恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 前日のART間ボーナス回数進捗は設定変更で消去されるため、ボーナス回数天井の宵越し狙いは無効になる。
- その他の設定変更専用冷遇: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更/電源OFF→ONとも液晶は通常3ステージからランダムで、ステージ単独では確定判別材料にならない。
- ぱちログは設定変更でも純電断でもクリアされるため、両者の確定判別には使えない。
- 本機固有の確定的ガックン/初期出目契約は `サイコパス / パチスロサイコパスK / 京楽 + ガックン / 朝一 / 設定変更 / 据え置き / リール` で再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_DISPLAY_AND_PACHILOG; UNVERIFIED_FOR_GAKKUN

### numericResetData
|設定|低確|高確|超高確|高確以上合算|
|---:|---:|---:|---:|---:|
|1|82.8%|15.6%|1.6%|17.2%|
|2|80.9%|17.2%|2.0%|19.2%|
|3|78.9%|18.8%|2.3%|21.1%|
|4|76.6%|20.3%|3.1%|23.4%|
|5|74.6%|21.9%|3.5%|25.4%|
|6|72.7%|23.4%|3.9%|27.3%|
- 一撃の当時解析とちょんぼりすたで一致。

## conflicts
- MATERIAL_NUMERIC_CONFLICT: NONE_CONFIRMED for canonical core/reset values.
- 純増約1.9枚/Gは「ボーナス/特化ゾーン込み」の定義。ART単体純増として読み替えない。

## missingFields
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- direct carryOver/stay-setting contract: UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH
- deterministic gakkun / initial-reel reset clue: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-09
1. グリーンべると 新機種発表 / 全国導入日 / A+ART — https://web-greenbelt.jp/00009567/
2. 一撃 基本・スペック — https://1geki.jp/slot/s_psychopass/
3. 一撃 天井/設定変更/電源OFF→ON — https://1geki.jp/slot/s_psychopass/3/
4. 一撃 通常時状態 / 設定変更時状態振り分け — https://1geki.jp/slot/s_psychopass/44/
5. 一撃 ART概要 — https://1geki.jp/slot/s_psychopass/81/
6. 一撃 ボーナス概要 — https://1geki.jp/slot/s_psychopass/61/
7. 一撃 小役 / 50枚ベース未調査表示 — https://1geki.jp/slot/s_psychopass/4/
8. ちょんぼりすた 基本/天井/朝一 — https://chonborista.com/slot/kyoraku-slot/40119/
9. P-WORLD 機種情報 / 49枚 / ART100G+α — https://www.p-world.co.jp/machine/database/8391
10. すろぱちくえすと 解析まとめ — https://www.slopachi-quest.com/article/psycho-pass/
11. 中一商事 中古実機資料（型式名 パチスロサイコパスK） — https://item.rakuten.co.jp/auc-nakaiti/terahu01/
