# カードバトルパチスロ ガンダム クロスオーバー

recordNo: 1310
machineName: カードバトルパチスロ ガンダム クロスオーバー
machineNameVariants: ガンダム クロスオーバー / ガンダムクロスオーバー / GUNDAM X-OVER
manufacturer: ビスティ
formalModel: S GUNDAM X-OVER A
certificationNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2019-10-07
generation: 6号機
systemType: AT / 周期抽選 / 自力バトルAT

## payoutRateBySetting

| 設定 | 出玉率 |
|---|---:|
| 1 | 97.3% |
| 2 | 98.8% |
| 3 | 100.7% |
| 4 | 103.5% |
| 5 | 107.2% |
| 6 | 108.6% |

ちょんぼりすた・複数後年DBで一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | AT/ボーナス初当たり |
|---|---:|
| 1 | 1/296.4 |
| 2 | 1/285.8 |
| 3 | 1/285.0 |
| 4 | 1/286.6 |
| 5 | 1/271.2 |
| 6 | 1/222.7 |

SANKYOオンライン博物館・業界記事・解析サイトで照合。

### CZ初当たり

| 設定 | CZ |
|---|---:|
| 1 | 1/116.3 |
| 2 | 1/117.4 |
| 3 | 1/117.5 |
| 4 | 1/117.8 |
| 5 | 1/118.6 |
| 6 | 1/119.6 |

SANKYOオンライン博物館掲載値。

信頼度: OFFICIAL_COLLECTION

## baseGamesPer50

- 約50G/50枚。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT「クロスオーバーラッシュ」: 強化パート約1.2枚/G、バトルパート最大約4.3枚/G。
- 業界発表では代表純増約4.3枚/G。

信頼度: OFFICIAL_COLLECTION + INDUSTRY

## basicPayout

- クロスボーナス: 約30枚。
- AT「クロスオーバーラッシュ」: 1セット30G+α（強化パート10G + バトルパート20G+α）。
- ATは1〜5セット目まで継続率約80%。
- CZ「G-カードオペレーション」: 平均約20G、AT突入期待度約40%。

## modeSpecificMinimumData

- 通常時は「ガシャパート10G → 強化パート15G×5〜8セット → バトル/CZ」を1周期として進行。
- 1周期は概ね約85〜130G+バトル、別整理では平均約116G。
- 天井は最大8周期目（平均約928〜930G）でボーナス or AT。2・3・5周期が天井となる振り分けも存在。
- 天井到達周期のAT期待度は約73%以上とする解析あり。
- 完全再現用のカード振り分け・全周期シナリオは収録対象外。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_PARTIAL_STATE
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior

- 設定変更時は **天井RESET / 有利区間RESET**。
- 朝一メニュー画面のカードは設定変更・電源OFF→ONの双方で「ボール」固定となるため、カードだけでは設定変更判別不可。

### carryOverBehavior

- 据え置き時は **天井進捗CARRY_OVER / 有利区間CARRY_OVER** とする解析を確認。
- 周期途中の詳細カード育成状態までの公開契約は物差し用途で固定できず、推測しない。

### powerCycleBehavior

- 電源OFF→ONのみ: **天井CARRY_OVER / 有利区間CARRY_OVER**。
- 朝一メニュー画面カードは設定変更時と同様にボール固定。

### gameCounterReset

- 設定変更: 周期天井進捗RESET。
- 据え置き / 純電断: 周期天井進捗CARRY_OVER。
- 液晶表示・カード表示の初期化挙動と内部周期を混同しない。

### ceilingAfterReset

- 通常最大天井: 8周期目（平均約928〜930G）。
- 2・3・5周期の短い天井も通常振り分けとして存在する。
- **設定変更専用**の短縮天井・専用天井振り分け数値は `PUBLIC_RESET_ONLY_CEILING_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH`。

### modeAfterReset

- 通常時の天井周期は2/3/5/8周期のいずれかが選択される。
- 設定変更時のモード/天井周期専用振り分けは、表記揺れ・型式名を含む再探索でも直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset

- ちょんぼりすたの当時朝一表では設定変更時・純電断時とも **ステージ調査中**。
- 当時期待値系実戦記事ではリセット台が朝一カード育成パートから始まった実戦記録あり。ただし単一実戦観察なので一般契約には昇格しない。

### advantageousSectionReset

- 設定変更: RESET。
- 据え置き / 電源OFF→ONのみ: CARRY_OVER。
- 通常時は有利区間ランプ常時消灯型とする当時攻略があり、朝一ランプ単独では変更判別不可。

### resetBenefits

- 当時攻略で **リセット恩恵は特になし**。
- 設定変更専用の天井短縮・朝一CZ優遇・専用当選率は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties

- 設定変更専用の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 当時攻略では **ガックン判別が有効** とされ、ガックン発生時は設定変更濃厚。
- 通常時の有利区間ランプは常時消灯型で、ランプ単独では変更判別不可。
- 朝一メニュー画面カードは設定変更・電源OFF→ONともボール固定のため、これも変更判別には使用不可。
- ガックン発生率・据え置き時誤発生率など定量値は `PUBLIC_NUMERIC_DETECTION_RATE_NOT_FOUND_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers

- 設定変更専用の天井周期振り分け、特定周期以内当選率、CZ/AT優遇率など比較可能な公開確定数値は `PUBLIC_NUMERIC_RESET_VALUES_NOT_FOUND_AFTER_RESEARCH`。
- 「2/3/5/8周期天井」は通常仕様であり、朝一専用値として扱わない。

### resetBehavior 再探索メモ

「カードバトルパチスロ ガンダム クロスオーバー / ガンダムクロスオーバー / S GUNDAM X-OVER A / ビスティ」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 周期 / 天井短縮 / モード / ガックン / 有利区間 / 有利区間ランプ」を組み合わせ、メーカー機種コレクション、当時業界記事、ちょんぼりすた、スロパチクエスト、当時解析ブログ、P-WORLD等を横断。初回検索で調査中だったステージ/モードをそのまま欠損確定せず再探索したが、機種固有の専用振り分けは固定できなかった。

## qualityNotes / conflicts

- 導入日: 業界記事は納品予定2019-10-06、アミューズメントジャパン・複数解析は導入2019-10-07。DBはホール導入日2019-10-07をcanonical。
- 型式はSANKYOオンライン博物館で `S GUNDAM X-OVER A` を確認。
- 検定番号は今回の型式名・メーカー名・機種名を変えた再探索でも直接固定できず `UNVERIFIED_AFTER_RESEARCH`。推測しない。
- AT純増は区間別に約1.2枚/Gと4.3枚/Gの変動型。業界記事の「約4.3枚/G」は代表最大側なので、物差しでは区間別定義を保持。

## sources

取得日: 2026-09-11

1. SANKYOオンライン博物館 — カードバトルパチスロ ガンダム クロスオーバー
   - https://www.sankyo-fever.jp/collection/895/
   - ビスティ、導入2019.10、型式S GUNDAM X-OVER A、設定別CZ/初当たり、純増約4.3枚、AT構造を確認。
   - reliability: OFFICIAL
2. P-WORLD / グリーンべると — ガンダム3作品がカードバトルで共演
   - https://news.p-world.co.jp/articles/11797/greenbelt
   - 2019-09-11。ビスティ製、初当たり1/296.4〜1/222.7、純増約4.3枚/G、納品10/6予定。
   - reliability: INDUSTRY / CONTEMPORARY
3. P-WORLD / Amusement Japan — ガンダムオールスター登場
   - https://news.p-world.co.jp/articles/11750/amusement
   - 2019-09-03。導入10/7、CZ平均約20G・AT期待度約40%、AT継続率約80%。
   - reliability: INDUSTRY / CONTEMPORARY
4. ちょんぼりすた — ガンダムクロスオーバー
   - https://chonborista.com/slot/bisty-slot/92192/
   - 導入10/7、設定別AT/機械割、約50G/50枚、変動純増、最大8周期天井、設定変更/純電断の天井・有利区間挙動、朝一カード仕様。
   - reliability: ANALYSIS_HIGH
5. スロパチクエスト — ガンダムクロスオーバー 天井解析
   - https://www.slopachi-quest.com/article/gundam-xover-tennjou/
   - 最大8周期約928G、2/3/5周期天井、リセット恩恵なし、通常時有利区間ランプ消灯、ガックン有効を確認。
   - reliability: ANALYSIS_SINGLE / CONTEMPORARY_STRATEGY
6. P-WORLD機種DB — カードバトルパチスロ ガンダム クロスオーバー
   - https://www.p-world.co.jp/machine/database/9031
   - ビスティ、6号機AT、クロスボーナス約30枚、AT30G+α、最大約4.3枚/Gを確認。
   - reliability: DATABASE
7. スロット解析情報~すろかい~ — S GUNDAM X-OVER A
   - https://slotkaiseki.hatenablog.com/entry/x-over
   - 2019-10-21。当時整理として型式、導入日、約50G/50枚、設定別CZ/初当たり/出玉率、周期天井を確認。設定変更欄は当時未判明であることも確認。
   - reliability: ANALYSIS_SINGLE / CONTEMPORARY
8. 復活!!でるでる仮面 — 設定判別ポイントまとめ
   - https://ameblo.jp/deruderu-kamen/entry-12575568715.html
   - 設定変更時・電源OFF/ON時ともメニューカードがボール固定であることを確認。
   - reliability: ANALYSIS_SINGLE

## missingFields

- certificationNumber
- 設定変更時の天井周期/モード専用振り分け
- 設定変更・純電断時のステージ/カード育成内部状態の直接契約
- ガックン発生率/据え置き時誤発生率

## conflicts

- releaseDate周辺: 2019-10-06は納品予定、2019-10-07は導入開始。ホール導入時系列では2019-10-07採用。

coreStatus: COMPLETE_CORE_WITH_MINOR_MISSING
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_PARTIAL_STATE
