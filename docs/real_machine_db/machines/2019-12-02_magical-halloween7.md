# マジカルハロウィン7

recordNo: 1321
machineName: マジカルハロウィン7
machineNameVariants: マジハロ7 / Sマジカルハロウィン7KU
manufacturer: コナミアミューズメント
formalModel: Sマジカルハロウィン7KU
certificationNumber: PUBLIC_VALUE_NOT_FIXED_AFTER_RESEARCH
releaseDate: 2019-12-02
generation: 6号機
systemType: AT / 疑似ボーナス+CZ+ST型AT

## payoutRateBySetting

| 設定 | 出玉率 |
|---|---:|
| 1 | 98.3% |
| 2 | 99.5% |
| 3 | 100.7% |
| 4 | 103.4% |
| 5 | 105.0% |
| 6 | 108.1% |

P-WORLDは98.33 / 99.45 / 100.68 / 103.36 / 105.04 / 108.05%の精密値を掲載。K-Navi、当時解析、複数攻略資料は小数1桁丸め値で一致するため、物差し本体は一般掲載の小数1桁値をcanonicalとし、精密値は丸め前の参照値として保持する。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### 疑似ボーナス合算

| 設定 | ボーナス |
|---|---:|
| 1 | 1/232.5 |
| 2 | 1/222.3 |
| 3 | 1/210.9 |
| 4 | 1/187.7 |
| 5 | 1/173.4 |
| 6 | 1/156.1 |

### AT「カボチャンス」初当たり

| 設定 | AT |
|---|---:|
| 1 | 1/641.7 |
| 2 | 1/594.8 |
| 3 | 1/547.9 |
| 4 | 1/466.6 |
| 5 | 1/420.5 |
| 6 | 1/354.9 |

K-Navi、P-WORLD、スロぱちクエスト、当時解析で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約50.9G/50枚**（設定1基準）。
- 当時営業系資料の約51Gは丸め差として扱う。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT「カボチャンス」: **約1～3枚/Gの可変純増**。
- 疑似ボーナス: **約5枚/G**。
- 機種全体では約1～5枚/Gの複数純増状態を持つ。

コナミ公式系情報、当時業界説明会記事、P-WORLD、複数解析で一致。

信頼度: OFFICIAL + INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- 黒BAR BIG: **200枚+α**。通常時はAT「カボチャンス」ストック濃厚。
- 赤7 BIG: **100枚+α**。
- REG: **50枚+α**。
- AT「カボチャンス」: **1セット30G以上**、純増約1～3枚/Gの可変型。
- 当時業界説明会ではカボチャンスを平均45G+上乗せGと説明。
- AT中限定「みことくえすと」はコインナビ20回管理。

信頼度: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は100Gを1周期とする周期抽選を持つ。
- CZ「桔梗ゾーン」: 15G+α、ボーナス期待度約40%以上。
- 天井: **通常時573G+αでボーナス以上**。
- コナミ公式スタッフ回答でも「通常時573Gぐらい」で天井到達する旨を確認。
- 有利区間移行後1G目、および101/201/301/401/501Gの周期地点で高確/CZ等を抽選。
- 内部モードA～Dが存在するが、通常時の全移行テーブルは物差し対象外。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_ADVANTAGEOUS_SECTION_ENTRY_NUMBERS
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior

- 設定変更時は **天井RESET**。
- **有利区間RESET**。当時解析では設定変更後はいったん非有利区間へ移行し、ハズレ以外成立で有利区間へ移行する。
- 前日の内部モードをそのまま据え置く契約ではなく、新たな有利区間側でモードA～Dのいずれかを用いる。ただし設定変更専用のモード振り分け数値は公開値を固定できない。
- 有利区間移行1G目は高確以上/CZ抽選が行われ、朝一は高確以上確定とする攻略資料あり。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior

- 設定を変更しない据え置き時は、少なくとも **天井進行および有利区間を引き継ぐ**扱い。
- 内部モード・内部状態の据え置き時独立契約を直接表にした高信頼資料は今回固定できなかったため、一般6号機挙動から推測補完しない。

信頼度: ANALYSIS_HIGH_FOR_CEILING_AND_SECTION / INTERNAL_MODE_STATE_LIMITED

### powerCycleBehavior

- 純電源OFF→ONでは **天井を引き継ぐ**。
- **有利区間を引き継ぐ**。
- 演出面について、コナミ公式スタッフは「基本的に電源を切った後、設定変更したかどうかで挙動が変わらないように作ってある」と回答しており、カスタム状態や桔梗解放状況など演出的要素から設定変更を見抜けない。
- 内部モード/内部状態について純電断と無電断据え置きを独立比較した公開契約は固定できず、推測補完しない。

信頼度: OFFICIAL_FOR_PRESENTATION + ANALYSIS_HIGH_FOR_CEILING_AND_SECTION

### gameCounterReset

- 設定変更: **RESET**。
- 据え置き / 純電源OFF→ON: **CARRY_OVER**。
- 通常天井: **573G+α**。

### ceilingAfterReset

- 設定変更専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更後も公開されている最深天井は **573G+α**。
- 天井恩恵はボーナス以上。AT直撃確定天井として扱わない。

### modeAfterReset

- 設定変更後は有利区間をリセットし、再移行後に内部モードA～Dを用いるため、前日のモードをそのまま引き継ぐ扱いではない。
- **設定変更専用モード振り分け**は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 据え置き/純電断の内部モード独立契約は `PUBLIC_DIRECT_CONTRACT_NOT_FIXED_AFTER_RESEARCH`。

### stateAfterReset

- 有利区間移行1G目は高確以上/CZ抽選が行われ、朝一設定変更後は **高確以上確定**とする当時攻略資料あり。
- 内部状態の「設定変更時専用振り分け」や、純電断時の細かな状態引継ぎ表は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### advantageousSectionReset

- 設定変更: **RESET / 非有利区間へ移行**。
- 純電源OFF→ON: **CARRY_OVER**。
- 通常時は有利区間ランプが消灯しているタイプとされ、**朝一ランプ単独では設定変更判別不可**。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### resetBenefits

- 朝一設定変更後は新たな有利区間移行となり、**有利区間移行1G目に高確以上/CZの抽選を受ける**。
- 設定変更専用の天井短縮は確認できない。
- リセットだけを狙う明確な専用狙い目は「特になし」とする当時攻略資料あり。

### resetPenalties

- 設定変更により前日の天井進行・有利区間進行を失うため、宵越し天井狙いに対しては不利。
- それ以外の設定変更専用ペナルティは `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 当時攻略では **設定変更を見抜く確立した方法なし**。
- 通常時は有利区間ランプ消灯のため、ランプ単独での変更判別不可。
- **リールガックンは確認されていない**とする当時攻略資料あり。発生率や確定条件を示す機種固有公開値も固定できず、ガックン判別は採用しない。
- コナミ公式スタッフ回答で、カスタム状態・桔梗解放状況など演出的部分から設定変更を見抜くことはできないと明言。
- 朝一ステージは電源OFF/ONと設定変更後とも海辺ステージ昼からとする解析があり、ステージ単独判別には使えない。

### numericResetData / publicMorningNumbers

- 設定変更後天井: **573G+α**（専用短縮なし確認）。
- 有利区間移行1G目のモード別抽選として、CZ「桔梗ゾーン」当選率はモードA/B/C/Dで **2.0% / 10.6% / 38.3% / 62.5%**。残りは高確（保証なし/あり）へ振り分けられる。
- この数値は「設定変更専用振り分け」ではなく、**有利区間移行1G目共通の公開値**。朝一設定変更後にも適用されるため朝一関連値として分離保存する。
- 設定変更時のモードA～D選択比率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 朝一特定G以内当選率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- ガックン発生率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ

2026-09-11に `マジカルハロウィン7 / マジハロ7 / Sマジカルハロウィン7KU / コナミアミューズメント / KONAMI` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 状態 / 有利区間 / 有利区間ランプ / ガックン / 変更判別` を組み合わせて再探索。コナミ公式スタッフQ&A、公式PV、当時業界記事、P-WORLD、K-Navi、スロぱちクエスト、当時解析サイトを横断した。天井・有利区間・演出面の変更判別不可・有利区間移行1G目数値までは固定できた一方、設定変更専用モード振り分け、純電断時の内部モード/状態の独立契約、ガックン発生率は固定できなかったため推測補完しない。

## sources

取得日: 2026-09-11

1. コナミアミューズメント公式PV — パチスロ「マジカルハロウィン7」プロモーションムービー
   - https://www.youtube.com/watch?v=RC0HQdQkOkM
   - 2019年12月2日稼働開始を公式告知
   - reliability: OFFICIAL
2. コナミアミューズメント「まじおつ◎」2020-01-24
   - https://www.konami.com/amusement/psm/portal/magihallo/magiotsu_23/20200124.html
   - 通常時573G付近の天井を出玉担当者が回答。カスタム/演出面から設定変更は見抜けず、電源OFF後に設定変更有無で演出的挙動が変わらない設計との担当者回答を確認
   - reliability: OFFICIAL
3. 娯楽産業 — コナミアミューズメント 新機種「マジカルハロウィン7」発表
   - https://www.goraku-sangyo.com/%E3%82%B3%E3%83%8A%E3%83%9F%E3%82%A2%E3%83%9F%E3%83%A5%E3%83%BC%E3%82%BA%E3%83%A1%E3%83%B3%E3%83%88%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%83%9E%E3%82%B8%E3%82%AB%E3%83%AB%E3%83%8F%E3%83%AD/
   - 2019-09-19プレス説明会、疑似ボ純増約5枚/G、カボチャンス約1～3枚/G、平均45G+上乗せ等
   - reliability: INDUSTRY
4. P-WORLD — マジカルハロウィン7
   - https://www.p-world.co.jp/machine/database/9061/
   - 6号機AT、設定別ボーナス/AT/機械割精密値、BIG200/100枚+α、REG50枚+α、AT30G以上等
   - reliability: INDUSTRY_DB / ANALYSIS_HIGH
5. K-Navi — マジカルハロウィン7
   - https://p-kn.com/slot/3325/
   - 2019-12-02導入、設定別ボーナス合算等
   - reliability: ANALYSIS_HIGH
6. スロぱちクエスト — マジカルハロウィン7 天井解析
   - https://www.slopachi-quest.com/article/magical-halloween7-tennjou/
   - 573G+α天井、50.9G/50枚、朝一高確以上、設定変更判別困難、有利区間ランプ/ガックン情報
   - reliability: ANALYSIS_HIGH
7. おスロおパチおいでやす — マジハロ7 天井・朝一リセット
   - https://oslo-opachi.com/2019/12/09/majiharo7_tennjyou/
   - 設定変更時は天井/有利区間RESET、電源OFF→ONは引継ぎ、有利区間移行1G目抽選値等
   - reliability: ANALYSIS_HIGH
8. スロット解析情報~すろかい~ — Sマジカルハロウィン7解析
   - https://slotkaiseki.hatenablog.com/entry/majiharo7
   - 型式Sマジカルハロウィン7KU、全設定スペック、有利区間移行時抽選、573G+α天井を確認
   - reliability: ANALYSIS_SINGLE
9. P-MEDIA JAPAN — Sマジカルハロウィン7KU検定通過
   - https://p-media.info/post-22869/
   - 型式名、メーカー、公式PVの2019-12-02稼働開始を確認
   - reliability: INDUSTRY_SECONDARY

## missingFields

- 検定番号の公開値
- 設定変更専用モードA～D振り分け
- 純電源OFF→ON時の内部モード/内部状態を無電断据え置きと独立比較した直接契約
- 本機固有のガックン発生率/確定条件
- 朝一特定G以内当選率

## conflicts

- 導入日はコナミ公式PV、K-Navi、P-WORLD系、複数2019年導入資料が **2019-12-02** で一致。一方、更新開始の早い単一解析ページに **2019-11-05** 表記が残る。公式稼働開始告知を優先して2019-12-02をcanonicalとし、11/5は事前情報段階の誤記/予定混同として平均化しない。
- 機械割98.3/99.5/100.7/103.4/105.0/108.1%と、P-WORLD精密値98.33/99.45/100.68/103.36/105.04/108.05%は定義競合ではなく丸め精度差。

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_ADVANTAGEOUS_SECTION_ENTRY_NUMBERS
