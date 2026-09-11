# パチスロ サラリーマン金太郎～MAX～

recordNo: 1316
machineName: パチスロ サラリーマン金太郎～MAX～
machineNameVariants: サラリーマン金太郎MAX / サラ金MAX
manufacturer: EXCITE（エキサイト）
formalModel: Sサラリーマン金太郎～MAX～X2
certificationNumber: 9S0872
releaseDate: 2019-11-05
generation: 6号機
systemType: AT / 疑似ボーナス＋高純増ナビ回数管理AT

## payoutRateBySetting

| 設定 | 出玉率 |
|---|---:|
| 1 | 97.5% |
| 2 | 99.3% |
| 3 | 101.2% |
| 4 | 104.0% |
| 5 | 107.7% |
| 6 | 112.0% |

K-Navi、Pachiseven、1geki、HAZUSE系統で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | 金太郎ルーレット | 金太郎チャンス（AT） |
|---|---:|---:|
| 1 | 1/319 | 1/760 |
| 2 | 1/309 | 1/736 |
| 3 | 1/303 | 1/713 |
| 4 | 1/296 | 1/695 |
| 5 | 1/289 | 1/669 |
| 6 | 1/282 | 1/653 |

金太郎ルーレットは赤7/青7疑似ボーナスまたはATへの起点となる初当たり指標。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- canonical: **約50G/50枚**。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT「金太郎チャンス」: **約8.0枚/G**。
- 15枚ベルのナビ回数管理型。

信頼度: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- サラリーマンBONUS（赤7）: **約70枚**。
- 金太郎BONUS（青7）: **約120枚**。
- 金太郎チャンス: ベルナビ5 / 10 / 20 / 30 / 100回。1セット目は10ナビ以上。
- ATはセットストック＋引き戻し構造。固定獲得枚数ではなく純増とナビ回数を物差し値として保持する。

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常A / 通常B / 通常C / 天国のゲーム数管理モードを持つ。
- モード別天井:
  - 通常A: **750G+前兆**
  - 通常B: **750G+前兆**
  - 通常C: **515G+前兆**（実戦値で500G+前兆説あり。canonicalは解析表記515G）
  - 天国: **66G+前兆**
- 最深部750G+前兆で金太郎ルーレット当選。
- ボーナス/AT後の引き戻しゾーン終了後、および設定変更後の有利区間移行直後にAT直撃ゾーンを持つ。
- ボーナス・引き戻しゾーン終了後は有利区間リセットとなる構造。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior

- **天井ゲーム数RESET**。
- **内部モード再抽選**。
- **金爆ストックRESET**。
- **鉄拳制裁レベルRESET**。
- **非有利区間から開始**。
- 開始ステージは **ヤマト本社（昼）**。
- 液晶ゲーム数は0G表示。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior

- 据え置き時は **内部天井ゲーム数CARRY_OVER**。
- 内部モード、金爆ストック、鉄拳制裁レベル、有利区間状態を引き継ぐとする当時解析が一致。
- ただし液晶ゲーム数、金爆/鉄拳制裁レベルの液晶上表示はリセットされるため、見た目上の0G/初期表示と内部進行を混同しない。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### powerCycleBehavior

- 純電源OFF→ONのみでは、**天井ゲーム数 / 内部モード / 金爆ストック / 鉄拳制裁レベル / 有利区間状態をCARRY_OVER**。
- 液晶ゲーム数は0G表示、開始ステージはヤマト本社（昼）。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### gameCounterReset

- 設定変更: 内部天井G **RESET**、液晶0G。
- 据え置き / 純電断: 内部天井G **CARRY_OVER**だが液晶は0G表示。
- よって朝一液晶G数だけでは変更判別不能。

### ceilingAfterReset

- 設定変更後も最深部は通常A/Bなら **750G+前兆**。
- 設定変更専用の短縮天井は確認できない。

### modeAfterReset

- 設定変更: **再抽選**。
- 据え置き / 純電断: **引継ぎ**。
- 設定変更専用モード振り分けの確定公開値は今回の再探索で固定できず `PUBLIC_RESET_MODE_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset

- 設定変更時は金爆ストック・鉄拳制裁レベルをRESET。
- 据え置き / 純電断では引継ぎ。
- 実機完全再現用の詳細内部抽選は対象外。

### advantageousSectionReset

- 設定変更: **RESET / 非有利区間開始**。
- 据え置き / 純電断: **CARRY_OVER**。
- 通常時は有利区間ランプが常時消灯するタイプとされるため、ランプ単独の朝一変更判別には使えない。

### resetBenefits

- 設定変更後は非有利区間を経由し、有利区間移行後 **25G間がAT直撃ゾーン**。
- 非有利区間中も成立役に応じKC直撃抽選を行う。公開解析では強チェリー/チャンス目25%、確定役100%などの数値があるが、これは「設定変更時専用当選率」ではなく非有利区間中抽選として分離する。
- 有利区間移行時には成立役不問のKC直撃抽選があり、設定1/2 1.56%、設定3/4 1.95%、設定5/6 2.34%とする解析あり。これも朝一限定値ではない。

### resetPenalties

- 設定変更により前日のハマりG、内部モード、金爆ストック、鉄拳制裁レベルを失う。
- 一方で朝一はAT直撃ゾーンを得るため、リセットは一律な不利とは扱わない。

### resetDetection

- **有利区間ランプ判別不可**: 通常時は常時消灯型。
- **液晶ゲーム数判別不可**: 据え置きでも0G表示。
- 金爆/鉄拳制裁レベルも据え置き時に内部引継ぎながら液晶表示はリセットされる。
- 当時解析は総合的に「設定変更・リセット判別は困難/不可」とする。
- 本機固有ガックンの確定契約/発生率は十分な再探索後も固定できず `PUBLIC_GAKKUN_CONTRACT_NOT_FOUND_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers

- 設定変更後: 有利区間移行後 **25G AT直撃ゾーン**。
- 非有利区間中KC直撃: 弱チェリー0.39%、強チェリー25.00%、ハッピ0.39%、チャンス目25.00%、確定役100%（当時解析値）。
- 有利区間移行時・成立役不問KC直撃: 設定1/2 **1.56%**、3/4 **1.95%**、5/6 **2.34%**。
- 設定変更専用モード振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 本機固有ガックン率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ

`パチスロ サラリーマン金太郎～MAX～ / サラリーマン金太郎MAX / Sサラリーマン金太郎～MAX～X2 / 9S0872 / EXCITE` に `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 金爆 / 鉄拳制裁レベル / 有利区間 / 有利区間ランプ / ガックン / 直撃ゾーン` を組み合わせ、HAZUSE、K-Navi、Pachiseven、1geki、スロパチくえすと、期待値見える化、おスロおパチおいでやす、業界記事を横断。主要リセット契約は複数資料で一致。設定変更専用モード振り分けと本機固有ガックン契約は公開値を固定できなかったため推測補完しない。

## qualityNotes / conflicts

- 2019-11-05導入はK-Navi、HAZUSE、1geki、当時業界記事で一致。一部業界記事に11/4「導入開始予定」表記があるが、全国ホール導入開始のcanonicalは11/5とする。
- 通常C天井は解析表で515G+前兆、実戦集計から500G+前兆の可能性を指摘する資料がある。解析表の515Gをcanonical、実戦説は注記として保持。

## sources

取得日: 2026-09-11

1. HAZUSE — パチスロ サラリーマン金太郎～MAX～
   - https://hazuse.com/machine/pachislot/9S0872/genre/209/
   - 型式 `Sサラリーマン金太郎～MAX～X2`、検定番号 `9S0872`、EXCITE、2019-11-05、出玉率端点を確認
   - reliability: ANALYSIS_HIGH
2. K-Navi — パチスロ サラリーマン金太郎～MAX～
   - https://p-kn.com/slot/3332/
   - 導入日、設定別金太郎ルーレット/AT、50枚50G、機械割、ボーナス枚数、純増を確認
   - reliability: ANALYSIS_HIGH
3. Pachiseven — サラリーマン金太郎MAX解析
   - https://pachiseven.jp/articles/detail/10178
   - 設定別初当たり/機械割、約50G/50枚、純増8枚/Gを照合
   - reliability: ANALYSIS_HIGH
4. 1geki — パチスロ サラリーマン金太郎～MAX～
   - https://1geki.jp/slot/s_sarakinmax/
   - 設定別AT初当たり/出玉率、2019-11-05、純増約8枚/Gを照合
   - reliability: ANALYSIS_HIGH
5. スロパチくえすと — 天井/朝一設定変更
   - https://www.slopachi-quest.com/article/salarymankinntarou-max-tennjou/
   - 設定変更/据え置きの天井・モード・金爆・鉄拳制裁レベル・有利区間、直撃抽選数値を確認
   - reliability: ANALYSIS_HIGH
6. 期待値見える化 — 天井/朝一
   - https://slotjin.com/tenjoukitaichi/kintaroumax-hyena/
   - モード別天井、設定変更/電源OFF→ON挙動、25G直撃ゾーン、通常時有利区間ランプ消灯を照合
   - reliability: ANALYSIS_HIGH
7. おスロおパチおいでやす — サラリーマン金太郎MAX
   - https://oslo-opachi.com/2019/09/12/sarakin_tenjyou/
   - 2019-11-05、天井・疑似ボーナス枚数・AT構造を照合
   - reliability: ANALYSIS_SINGLE
8. 遊技日本 — 11/5導入記事
   - https://yugi-nippon.com/pachinko-new-machine/post-30798/
   - EXCITE製、11月5日全国導入、純増約8枚/Gを確認
   - reliability: INDUSTRY

## missingFields

- 設定変更専用モード振り分けの確定公開値
- 本機固有ガックン条件/発生率

coreStatus: COMPLETE_CORE
