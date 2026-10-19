machineName: パチスロ ロリポップチェーンソー
manufacturer: 藤商事
releaseDate: 2016-12-19
recordNumber: 1033
generation: 5号機 / 5.5号機期
systemType: A+ART / CZ / ゲーム数モード
formalModelName: ロリポップチェーンソーFSB
certificationNumber: 6S0963
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 藤商事公式に現存する製品ページで「パチスロ ロリポップチェーンソー」を確認。
- HAZUSEは型式名「ロリポップチェーンソーFSB」、検定番号6S0963、導入開始日2016-12-19を掲載。
- ちょんぼりすた、パチスロデータ系資料も2016-12-19導入で一致するため canonical releaseDate は2016-12-19。
- 一方、後年の単一攻略ページに2016-12-12表記があるため、日付差はCONFLICTとして保持し平均しない。
reliability: OFFICIAL_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 機械割 / 出玉率 |
|---:|---:|
| 1 | 97.69% |
| 2 | 98.78% |
| 3 | 100.46% |
| 4 | 103.89% |
| 5 | 107.14% |
| 6 | 111.88% |

- 藤商事公式値。解析サイトの丸め値97.7 / 98.8 / 100.5 / 103.9 / 107.1 / 111.9%と整合。
reliability: OFFICIAL

## initialHitBySetting
### ART初当たり
| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/412.18 |
| 2 | 1/395.30 |
| 3 | 1/375.45 |
| 4 | 1/328.15 |
| 5 | 1/297.66 |
| 6 | 1/263.78 |

- 藤商事公式値。複数解析の1/412.2〜1/263.8と一致。

### STAR SOUL BONUS
- 全設定共通 1/1310.7。
- A+ART合算は物差し必須項目ではないため、定義混同回避のため主値に採用しない。
reliability: OFFICIAL_PLUS_ANALYSIS_HIGH

## baseGamesPer50
- 約40G〜41.5G / 50枚（HAZUSE）。
- 複数解析では約41G/50枚表記で整合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「JULIET RUSH」: 約2.0枚/G。
- ARTは固定継続G数型ではなく、ロリポップを保持する限り継続するアイコン獲得型。
reliability: OFFICIAL_INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout
- STAR SOUL BONUS: 302枚を超える払い出しで終了、純増約204枚。
- 一般向け資料では約200枚表記。
- ART「JULIET RUSH」: 継続G数不定。開始から最低30Gはドクロ非出現保証として扱う解析あり。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時内部モード: 通常A / 通常B / 天国。
- 通常A: 最大天井1200G、200G・600GでCZ期待度中、400Gで高。
- 通常B: 最大天井800G、400GでCZ期待度中、200G・600Gで高。
- 天国: 最大天井100G。
- 天井到達時はART当選濃厚。
- 通常時内部状態: 通常 / 高確 / 超高確。内部状態によりダンクアップチャレンジ等の当選率が変化。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時は天井ゲーム数をリセット。
- 内部モードを設定変更専用振り分けで再抽選。
- 内部状態を設定変更専用振り分けで再抽選。
- 朝一液晶ステージは学校ステージ。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_MODE_STATE / ANALYSIS_SINGLE_FOR_COUNTER_RESET

### carryOverBehavior
- 据え置き時は天井ゲーム数、内部モード、内部状態を引き継ぐ扱い。
- 朝一液晶は学校ステージへ戻るため、表示ステージだけでは内部引継ぎを否定できない。
reliability: ANALYSIS_SINGLE_DIRECT_RESET_TABLE

### powerCycleBehavior
- 純電源OFF→ONでは天井ゲーム数、内部モード、内部状態を引き継ぐ。
- 液晶ステージは学校ステージ。
- 設定変更時の再抽選とは明確に区別する。
reliability: ANALYSIS_SINGLE_DIRECT_RESET_TABLE

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRYOVER_SUPPORTED。
- 純電源OFF→ON: CARRYOVER_SUPPORTED。
reliability: ANALYSIS_SINGLE_DIRECT_RESET_TABLE

### ceilingAfterReset
- 設定変更で前日の天井進捗は消去される。
- 設定変更専用の固定短縮天井は確認されていない。
- ただし再抽選されたモードにより、新しい最大天井は通常A=1200G / 通常B=800G / 天国=100Gとなるため、天国選択時は実質的な朝一100G天井恩恵が生じる。
reliability: ANALYSIS_HIGH_FOR_MODE_CEILING / ANALYSIS_SINGLE_FOR_RESET_COUNTER

### modeAfterReset
- 設定変更時のモード再抽選:
| 設定 | 通常A | 通常B | 天国 |
|---:|---:|---:|---:|
| 1 | 59.84% | 20.08% | 20.08% |
| 2 | 49.61% | 30.31% | 20.08% |
| 3 | 54.72% | 20.08% | 25.20% |
| 4 | 44.49% | 30.31% | 25.20% |
| 5 | 49.61% | 20.08% | 30.31% |
| 6 | 32.28% | 32.68% | 35.04% |

- 据え置き / 純電源OFF→ONでは内部モード引継ぎ。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### stateAfterReset
- 設定変更時の通常時内部状態再抽選:
| 設定 | 通常 | 高確 | 超高確 | 高確以上合計 |
|---:|---:|---:|---:|---:|
| 1 | 59.84% | 35.04% | 5.12% | 40.16% |
| 2 | 72.44% | 25.20% | 2.36% | 27.56% |
| 3 | 59.84% | 35.04% | 5.12% | 40.16% |
| 4 | 72.44% | 25.20% | 2.36% | 27.56% |
| 5 | 54.72% | 35.04% | 10.24% | 45.28% |
| 6 | 40.94% | 43.70% | 15.35% | 59.05% |

- 「高確以上合計」は公開振り分けの単純合算値であり、独立解析値ではない。
- 据え置き / 純電源OFF→ONでは内部状態引継ぎ。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_RESET_DISTRIBUTION / ANALYSIS_SINGLE_FOR_CARRYOVER

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 設定変更後は天国モード選択率が設定1/2で20.08%、設定3/4で25.20%、設定5で30.31%、設定6で35.04%。天国なら最大100GでART当選濃厚。
- 設定変更後の高確以上スタート率は設定1=40.16%、2=27.56%、3=40.16%、4=27.56%、5=45.28%、6=59.05%。
- 朝一0Gから高確示唆を確認する価値があると当時攻略で評価されているが、期待収支そのものは本DB対象外。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### resetPenalties
- 設定変更により前日から蓄積した天井ゲーム数は消去されるため、深い据え置き狙い価値は失われる。
- 設定変更専用のその他の明確な不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_SINGLE_DIRECT_RESET_TABLE

### resetDetection
- 設定変更・純電源OFF→ONとも朝一は学校ステージのため、初期ステージ単独では判別不可。
- 当時のガックン検証動画では設定変更後も明確なブレが見られず、「ガックン判別はおそらく不可」と評価。確定判別要素としては採用しない。
- 本機固有の確定的なランプ/初期出目による変更判別は、検索語・資料系統を変えた再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_SINGLE_DIRECT_TEST_PLUS_RESEARCH

### numericResetData
- 設定変更時モード振り分け: modeAfterReset表を採用。
- 設定変更時内部状態振り分け: stateAfterReset表を採用。
- 設定変更後の固定短縮天井G数: `NONE_CONFIRMED`。ただし天国選択時は100G、通常Bなら800G、通常Aなら1200Gが各モード上限。
- 「朝一100G以内の実ART当選率」の直接公開値は `UNVERIFIED_AFTER_RESEARCH`。天国振り分けをそのまま100G以内実当選率へ変換しない。

## dataQualityNotes
- 藤商事公式は設定別出玉率とART初当りを掲載しているため、これをcanonical performance coreとする。
- HAZUSEの見出しに「ボーナス＋ART合成確率」として1/412.2〜1/263.8が掲載される箇所があるが、藤商事公式・他解析では同系列はART初当り。定義ラベルの誤記/揺れと判断し、公式定義を優先してART初当りとして保存。
- ボーナスは全設定共通1/1310.7。A+ART合算は別定義であり、ART初当りと混同しない。
- 朝一について「設定変更」「リセット」「据え置き」「電源OFF ON」「天井」「モード」「状態」「ガックン」を組み替え、藤商事公式、業界記事、HAZUSE、当時攻略、旧解析DB、中古/回顧資料まで横断した。
- releaseDateは2016-12-19を複数資料で固定する一方、単一資料の2016-12-12表記をCONFLICTとして保持。

## conflicts
- `CONFLICT_RELEASE_DATE_2016_12_19_VS_2016_12_12`
  - canonical: 2016-12-19（HAZUSE、ちょんぼりすた、パチスロデータ系など複数一致）。
  - alternate: 2016-12-12（スロットガーデン単一資料）。
- HAZUSEの「ボーナス＋ART合成確率」見出しと公式ART初当り定義のラベル差は数値競合ではなく定義ラベル問題としてdataQualityNotesに分離。

## missingFields
- 朝一100G以内の実ART当選率: UNVERIFIED_AFTER_RESEARCH（天国振り分けから推定しない）。
- 本機固有の確定的設定変更判別: NONE_CONFIRMED_AFTER_RESEARCH。

## sources
取得日: 2026-09-08

1. 藤商事公式 — パチスロ ロリポップチェーンソー
   - https://www.fujimarukun.co.jp/products/lolipop/
2. 藤商事公式 — 遊技小冊子
   - https://www.fujimarukun.co.jp/products/open_book/lolipop/
3. HAZUSE — パチスロ ロリポップチェーンソー（型式・検定・導入・性能・天井・モード・状態）
   - https://hazuse.com/machine/pachislot/6S0963/
4. HAZUSE — AT/ART解析（設定変更時モード/状態振り分け）
   - https://hazuse.com/machine/pachislot/6S0963/genre/209/
5. ちょんぼりすた — ロリポップチェーンソー スロット新台解析
   - https://chonborista.com/slot/fuji-slot/27306/
6. すろぱちくえすと — 朝一設定変更・リセット時の恩恵・挙動・ガックン動画
   - https://www.slopachi-quest.com/article/lollipop-reset/
7. すろぱちくえすと — 天井・ゾーン解析
   - https://www.slopachi-quest.com/article/lollopop/
8. P-WORLD — パチスロ ロリポップチェーンソー
   - https://www.p-world.co.jp/machine/database/8192
9. PiDEA X — ベルがチャンスの「ロリポップチェーンソー」を発表／藤商事（2016-10-05）
   - https://www.pidea.jp/articles/%E3%83%99%E3%83%AB%E3%81%8C%E3%83%81%E3%83%A3%E3%83%B3%E3%82%B9%E3%81%AE%E3%80%8C%E3%83%AD%E3%83%AA%E3%83%9D%E3%83%83%E3%83%97%E3%83%81%E3%82%A7%E3%83%BC%E3%83%B3%E3%82%BD%E3%83%BC%E3%80%8D%E3%82%92%E7%99%BA%E8%A1%A8%EF%BC%8F%E8%97%A4%E5%95%86%E4%BA%8B
10. グリーンべると — 「ベル」の引きがゲームの行方を左右（2016-10-07）
   - https://web-greenbelt.jp/00009008/
11. パチスロ解析ガイド — ロリポップチェーンソー
   - https://pachislot-guide.net/2016/lollipop-chainsaw/
12. スロットガーデン — ロリポップチェーンソー（releaseDate alternate source）
   - https://xn--mckza4ard4ttb2d.com/lolipop
