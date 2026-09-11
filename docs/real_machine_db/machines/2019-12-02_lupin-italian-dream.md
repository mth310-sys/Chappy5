# パチスロ ルパン三世～イタリアの夢～

recordNo: 1322
machineName: パチスロ ルパン三世～イタリアの夢～
machineNameVariants: ルパン三世 イタリアの夢 / ルパンイタリア / Sルパン三世イタリアの夢H5
manufacturer: オリンピア（販売: 平和）
formalModel: Sルパン三世イタリアの夢H5
certificationNumber: 9S0828
releaseDate: 2019-12-02
generation: 6号機
systemType: AT / 高純増疑似ボーナス+1G連

## payoutRateBySetting

| 設定 | 出玉率 |
|---|---:|
| 1 | 97.3% |
| 2 | 99.0% |
| 3 | 101.3% |
| 4 | 104.8% |
| 5 | 109.7% |
| 6 | 112.8% |

K-Navi、HAZUSE、当時解析、複数攻略資料で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### 疑似ボーナス / AT初当たり

| 設定 | 初当たり |
|---|---:|
| 1 | 1/421.4 |
| 2 | 1/396.6 |
| 3 | 1/367.6 |
| 4 | 1/337.1 |
| 5 | 1/297.1 |
| 6 | 1/277.3 |

K-Navi、当時解析、複数攻略資料で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

設定別の当時解析値:

- 設定1: **約51.7G/50枚**
- 設定2: **約51.7G/50枚**
- 設定3: **約51.8G/50枚**
- 設定4: **約51.9G/50枚**
- 設定5: **約51.9G/50枚**
- 設定6: **約52.0G/50枚**

別資料の「約51～52G」は同範囲の丸め表記。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- 疑似ボーナスAT: **約9.0枚/G**。
- 2019年当時、平和のプレス発表会を報じた業界記事でも「現行機最高となるAT純増約9枚」と説明。

信頼度: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- MAX BONUS: **34G / 約306枚**、純増約9.0枚/G。消化中に1G連ストックを抽選し、1G連はMAX BONUS。
- LUPIN BONUS: **15枚役ナビ5回 / 約60枚**。
- LUPIN BONUSからVストック特化ゾーン「極・銭形共闘」へ突入する可能性あり。

信頼度: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時はレア役と規定ゲーム数の両方でボーナスを目指す。
- 通常/特殊/天国/ルパン等のモードが存在するが、全移行テーブルは物差し対象外。
- 通常時の最深天井: **766G+α**。
- 規定ゲーム数候補として216/416/616/766G+α等が公開されている。
- 不二子ポイント高確率帯が存在し、朝一の内部ゲーム数判別にも利用される。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_STRONG_DETECTION_SIGNALS
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior

- 設定変更時は **天井ゲーム数RESET**。
- **内部状態RESET**。
- **有利区間RESETし非有利区間へ移行**。
- メニュー画面ゲーム数は0Gから。
- 朝一ステージはリミニステージとする解析資料あり。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior

- 据え置きでは **内部天井ゲーム数を引き継ぐ**。
- メニュー画面上は0G表示に戻るが、内部ゲーム数は継続する。
- 内部状態・有利区間ランプも引継ぎ。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### powerCycleBehavior

- 純電源OFF→ON（設定変更なし）は当時朝一表で据え置き条件として整理され、**天井・内部状態・有利区間をCARRY_OVER**。
- 液晶/メニューの見た目ゲーム数は0Gへ戻るが内部ゲーム数は引き継ぐ。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### gameCounterReset

- 設定変更: **RESET**。
- 据え置き / 純電源OFF→ON: **CARRY_OVER**。
- 表示ゲーム数だけは朝一0Gになるため、内部天井進行と分離して扱う。

### ceilingAfterReset

- 設定変更専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常時の公開最深天井は **766G+α**。

### modeAfterReset

- 設定変更時は非有利区間へ移行するため、前日の有利区間/状態を継続しない。
- 設定変更専用のモード振り分け数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 据え置き時のモードは有利区間/内部状態とともに継続する扱いの朝一解析が中心だが、モード名別の独立引継ぎ表までは固定しない。

### stateAfterReset

- 設定変更: **RESET / 非有利区間へ**。
- 据え置き / 純電断: **CARRY_OVER**。

### advantageousSectionReset

- 設定変更: **RESET / 非有利区間へ移行 / 朝一ランプ消灯**。
- 据え置き / 純電断: **CARRY_OVER**。
- 本機は通常時から有利区間ランプが点灯するタイプとする当時解析があり、朝一判別に利用可能。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### resetBenefits

- 設定変更専用の天井短縮や固定優遇は **特になし**とする当時攻略資料あり。
- 非有利区間を経由することで新たな区間へ移行するが、これ自体を固定出玉恩恵とは扱わない。

### resetPenalties

- 設定変更により前日の天井進行・内部状態を失うため、宵越し天井狙いに対して不利。
- それ以外の設定変更専用ペナルティは `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- **朝一有利区間ランプ点灯 → 据え置き濃厚**。
- **朝一有利区間ランプ消灯 → 設定変更濃厚**。
- ただし開店前1G回し等のホール対策、前日最終0Gヤメ等の例外があるため「確定」ではなく濃厚扱い。
- 不二子ポイント高確率の内部ゲーム数帯を利用した変更判別も可能。表示ゲーム数は0Gに戻る一方、据え置きは内部ゲーム数を引き継ぐため、当日表示と高確率帯のズレが据え置き示唆になる。
- 本機固有のガックン発生条件・発生率を示す高信頼公開値は十分再探索しても固定できず、ランプ/内部ゲーム数挙動を主要判別要素とする。

### numericResetData / publicMorningNumbers

- 設定変更後の公開最深天井: **766G+α**（専用短縮なし確認）。
- 不二子ポイント高確率の実戦上の内部ゲーム数帯: **1～99G / 200～249G / 400～449G / 600～649G / 750G～**。
- 上記はメーカー公表値ではなく当時攻略の実戦観測値。朝一の内部ゲーム数ズレを判別する補助値として `EMPIRICAL_RESET_DETECTION_WINDOWS` 扱い。
- 設定変更専用モード振り分け、朝一特定G以内当選率、ガックン発生率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ

2026-09-11に `ルパン三世 イタリアの夢 / ルパンイタリア / Sルパン三世イタリアの夢H5 / 9S0828 / オリンピア / 平和` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 状態 / 不二子ポイント / 有利区間 / 有利区間ランプ / ガックン / 変更判別` を組み合わせて再探索。平和公式ニュース、当時業界記事、HAZUSE、K-Navi、当時解析、スロぱちクエスト、期待値見える化を横断。天井・内部状態・有利区間・表示Gと内部Gの差・強い変更判別要素を固定できた一方、設定変更専用モード振り分けとガックン契約は公開値を固定できなかったため推測補完しない。

## sources

取得日: 2026-09-11

1. 平和 NEWS&INFORMATION 2019
   - https://www.heiwanet.co.jp/news/2019/
   - 2019-09-26に『パチスロ ルパン三世～イタリアの夢～』製品情報掲載を確認
   - reliability: OFFICIAL
2. 遊技通信 / P-WORLD — 平和、純増約9枚のパチスロルパン最新作
   - https://news.p-world.co.jp/articles/11933/yugitsushin
   - 2019-10-01プレス発表会、純増約9枚/G、MAX約306枚、LUPIN BONUS約60枚、12月上旬導入予定
   - reliability: INDUSTRY
3. K-Navi — ルパン三世 イタリアの夢
   - https://p-kn.com/slot/3333/
   - 2019-12-02導入、設定別初当たり/機械割、MAX BONUS34G約306枚、LUPIN BONUS約60枚
   - reliability: ANALYSIS_HIGH
4. HAZUSE — パチスロ ルパン三世～イタリアの夢～
   - https://hazuse.com/machine/pachislot/9S0828/
   - 型式Sルパン三世イタリアの夢H5、検定番号9S0828、オリンピア、2019-12-02、純増約9枚/G
   - reliability: ANALYSIS_HIGH_DB
5. スロット解析情報~すろかい~ — Sルパン三世～イタリアの夢～
   - https://slotkaiseki.hatenablog.com/entry/lupinitaly
   - 設定別初当たり/出玉率、51.7～52.0G/50枚、766G+α天井、モード/規定G情報
   - reliability: ANALYSIS_SINGLE
6. スロぱちクエスト — ルパン三世 イタリアの夢 天井解析
   - https://www.slopachi-quest.com/article/rupin-the-3rd-italy-tennjou/
   - 設定変更/純電断の天井・内部状態・有利区間、ランプ判別、リセット恩恵なし
   - reliability: ANALYSIS_HIGH
7. 期待値見える化 — ルパンイタリアの夢 朝一リセット挙動
   - https://slotjin.com/slot/lupinitaly-reset/
   - 天井/内部状態/ランプの設定変更対据え置き表、メニュー表示0G対内部G引継ぎ、不二子ポイント高確率帯の実戦値
   - reliability: ANALYSIS_HIGH / empirical windows

## missingFields

- 設定変更専用モード振り分け
- 本機固有ガックン発生条件/発生率
- 朝一特定G以内当選率

## conflicts

- メーカー表記は資料により「平和」「オリンピア」。HAZUSEの型式DBはメーカーをオリンピア、平和公式/業界発表は平和ブランドとして扱うため、本レコードでは **オリンピア製造（販売: 平和）** と整理し、別機種として分離しない。
- baseGamesPer50の約51～52Gと設定別51.7～52.0Gは丸め精度差で、数値競合ではない。

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_STRONG_DETECTION_SIGNALS
