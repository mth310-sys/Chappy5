# ドラゴンホイール

recordNo: 1311
machineName: ドラゴンホイール
machineNameVariants: パチスロ ドラゴンホイール / DRAGON WHEEL
manufacturer: コナミアミューズメント
formalModel: SドラゴンホイールKT
certificationNumber: 9S0098
releaseDate: 2019-10-07
generation: 6号機
systemType: AT / 疑似ボーナス連荘 / ポイントCZ

## payoutRateBySetting

| 設定 | 出玉率 |
|---|---:|
| 1 | 98.0% |
| 2 | 98.9% |
| 3 | 99.9% |
| 4 | 102.3% |
| 5 | 103.7% |
| 6 | 108.1% |

必勝本系・パチナビ等で照合。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | ドラゴンボーナス初当たり |
|---|---:|
| 1 | 1/368 |
| 2 | 1/333 |
| 3 | 1/299 |
| 4 | 1/271 |
| 5 | 1/258 |
| 6 | 1/237 |

K-Navi・一撃・ちょんぼりすた・複数解析で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 約50G/50枚。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT疑似ボーナス: 約5.1枚/G。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- ドラゴンボーナス: 100枚 / 200枚 / 300枚。
- ボーナス後は「龍神バトル」で連荘を目指し、最大継続率は約88%。
- ドラゴンJACK POT確率は設定共通1/4096とする当時解析あり。
- JACK POT CHANCEは約1/1600、フリーズ期待度約40%とする一撃解析あり。

## modeSpecificMinimumData

- 通常時はリプレイ・レア役等で液晶ポイントを加算し、24pt到達でCZ「ドラゴンチャンス」を目指す。
- 通常天井: 有利区間移行後700G+αでCZ経由のドラゴンボーナス当選。
- 液晶ポイント表示は朝一に0から開始する資料があるが、表示値と内部天井/状態を同一視しない。
- 完全再現用のポイント獲得詳細・CZ昇格抽選・フリーズ内部抽選は収録対象外。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior

- 発売当時の主要解析（ちょんぼりすた・一撃）は、設定変更時の **天井 / 内部状態 / ステージを「調査中」** と明記。
- `ドラゴンホイール / SドラゴンホイールKT / コナミアミューズメント` に設定変更・リセット・朝一・据え置き・電源OFF ON・天井短縮・モード・ガックン・有利区間を組み合わせて再探索したが、設定変更時の内部天井・状態を直接固定する機種固有契約には到達できなかった。
- よって一般的な6号機挙動から推測せず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- 据え置き時でも **液晶ポイント表示は0からスタート** とする当時攻略を確認。
- これは表示上のポイントであり、内部天井ゲーム数・内部ポイント・状態の引継ぎを直接証明しない。
- 据え置き時の内部天井/状態は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 発売当時の一撃・ちょんぼりすたでは、電源OFF→ON時の天井・内部状態・ステージは「調査中」。
- その後の再探索でも機種固有の直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- 通常天井は有利区間移行後700G+α。
- 設定変更 / 据え置き / 純電源OFF→ONそれぞれで内部天井ゲーム数をRESET/CARRY_OVERするかは、十分な再探索後も公開直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 液晶ポイント表示は据え置き時でも0開始とする資料があるため、表示カウンタと内部進捗を分離して記録する。

### ceilingAfterReset

- 通常天井: **700G+α**。
- 設定変更専用の短縮天井・変更天井・専用周期は `PUBLIC_RESET_ONLY_CEILING_NOT_FOUND_AFTER_RESEARCH`。
- 通常天井をそのままリセット後天井と推定しない。

### modeAfterReset

- 設定変更時の専用モード、モード再抽選/引継ぎ、振り分け数値は `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset

- 設定変更・純電断時の内部状態/ステージは発売当時解析で「調査中」。
- 後年資料まで含めて再探索したが直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- 本機は6号機ATで通常天井が有利区間移行後700G+α。
- 設定変更 / 据え置き / 純電断時の有利区間RESET/CARRY_OVERを本機固有に明示する信頼できる公開資料は、再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 通常時有利区間ランプは消灯とする後年攻略があり、朝一ランプ単独での設定変更判別には使えない。

### resetBenefits

- 後年の攻略整理では **リセット狙い不要 / 特別なリセット恩恵なし** とされる。
- 一方、発売当時の攻略記事ではリセット恩恵自体が「調査中」だったため、メーカー公表値・当時確定解析には昇格させない。
- DB上は `NO_MAJOR_RESET_BENEFIT_CONFIRMED_RETROSPECTIVE` とし、信頼度 `ANALYSIS_SINGLE_RETROSPECTIVE`。

### resetPenalties

- 設定変更専用の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 通常時有利区間ランプは消灯とする資料があり、ランプ単独の設定変更判別は不可。
- ガックンの本機固有発生条件・発生率、据え置き時誤発生率は、検索語を変えた再探索でも固定できず `PUBLIC_GAKKUN_CONTRACT_NOT_FOUND_AFTER_RESEARCH`。
- 据え置きでも液晶ポイント表示が0開始となるため、液晶ポイント0だけでは変更判別できない。

### numericResetData / publicMorningNumbers

- 設定変更時のモード振り分け、朝一特定G以内当選率、短縮天井、恩恵発生率など比較可能な朝一専用公開数値は `PUBLIC_NUMERIC_RESET_VALUES_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ

「ドラゴンホイール / パチスロ ドラゴンホイール / SドラゴンホイールKT / コナミアミューズメント」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 内部状態 / ガックン / 有利区間 / 有利区間ランプ」を組み合わせ、発売当時のちょんぼりすた、一撃、スロパチクエスト、K-Navi、解析ブログ、後年攻略DBを横断。発売当時に調査中だった設定変更/純電断の直接契約を追加固定できる資料には到達できなかったため、一般論から推測して埋めていない。

## qualityNotes / conflicts

- 導入日は複数解析・K-Navi・導入カレンダーで2019-10-07一致。
- 正式型式 `SドラゴンホイールKT`、検定番号 `9S0098` は機種DBで確認。
- 出玉率・初当たり・純増・ベースは複数資料で整合。
- resetBehaviorについては発売当時資料が「調査中」の項目を多く残しており、後年一般論で補完せず `PARTIAL_RESEARCH_EXHAUSTED` とした。

## sources

取得日: 2026-09-11

1. K-Navi — ドラゴンホイール
   - https://p-kn.com/slot/3293/
   - 2019-10-07導入、設定別初当たり、AT、JACK POT等を確認。
   - reliability: ANALYSIS_HIGH / CONTEMPORARY
2. ちょんぼりすた — ドラゴンホイール
   - https://chonborista.com/slot/konami-slot/90185/
   - 2019-10-07、約50G/50枚、純増約5.1枚/G、天井700G+α、設定変更/純電断の朝一表が調査中であることを確認。
   - reliability: ANALYSIS_HIGH / CONTEMPORARY
3. 一撃 — ドラゴンホイール
   - https://1geki.jp/slot/s_dragonw/
   - 初当たり、純増5.1枚、100/200/300枚、設定変更/電源OFF→ON項目の調査中状況を確認。
   - reliability: ANALYSIS_HIGH
4. スロパチクエスト — ドラゴンホイール 天井・狙い目
   - https://www.slopachi-quest.com/article/dragonwheel-tennjou/
   - 700G+α、据え置きでも液晶ポイント0開始、当時のランプ/リセット恩恵調査状況を確認。
   - reliability: ANALYSIS_SINGLE / CONTEMPORARY_STRATEGY
5. パチナビ — ドラゴンホイール
   - https://pachinavi.net/machines/dragon-wheel/
   - 型式SドラゴンホイールKT、検定番号9S0098、2019-10-07、設定別出玉率/初当たりを確認。
   - reliability: DATABASE
6. スロット解析情報~すろかい~ — SドラゴンホイールKT
   - https://slotkaiseki.hatenablog.com/entry/dragonwheel
   - 2019年当時の型式・導入日・約50G/50枚・設定別スペックを確認。設定変更欄に確定値がないことも確認。
   - reliability: ANALYSIS_SINGLE / CONTEMPORARY
7. Slot Method — ドラゴンホイール
   - https://slotmethod.jp/dragonwheel-reset/
   - 後年整理として通常時有利区間ランプ消灯、リセット狙い不要/特別な恩恵なしを確認。
   - reliability: ANALYSIS_SINGLE / RETROSPECTIVE
8. 日刊スポーツ — パチンコ・パチスロ導入カレンダー 2019-10-04
   - https://www.nikkansports.com/m/amusement/pachislot/news/201910040000287_m.html
   - 10月7日パチスロとして南国娘2、ガンダム クロスオーバー、ドラゴンホイールを掲載。
   - reliability: INDUSTRY / CONTEMPORARY_CALENDAR

## missingFields

- 設定変更時の内部天井RESET/CARRY_OVER直接契約
- 据え置き/純電断時の内部天井・内部状態の直接契約
- 設定変更時のモード/状態振り分け
- 設定変更/純電断時の有利区間直接契約
- ガックン発生条件・発生率
- 朝一専用公開数値

## conflicts

- resetBenefits: 発売当時資料は調査中、後年攻略は「特別な恩恵なし」。後年結論を低めの信頼度で保持し、当時確定値にはしない。

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
