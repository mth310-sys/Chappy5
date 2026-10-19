# ドリームクルーン2

recordNo: 1323
machineName: ドリームクルーン2
machineNameVariants: DREAM CRUNE 2 / Sドリームクルーン2CX
manufacturer: オーイズミ
formalModel: Sドリームクルーン2CX
certificationNumber: 9S0550
releaseDate: 2019-12-02
generation: 6号機
systemType: AT / 疑似ボーナス・権利物風

## payoutRateBySetting

| 設定 | 出玉率 |
|---|---:|
| 1 | 97.4% |
| 2 | 98.9% |
| 5 | 103.0% |
| 6 | 107.0% |

HAZUSE、1geki、ちょんぼりすたで一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### AT初当たり

| 設定 | AT初当たり |
|---|---:|
| 1 | 1/698.1 |
| 2 | 1/630.4 |
| 5 | 1/504.3 |
| 6 | 1/421.9 |

### クルーン&ルーレット発生率

| 設定 | 発生率 |
|---|---:|
| 1 | 1/128.8 |
| 2 | 1/122.8 |
| 5 | 1/119.0 |
| 6 | 1/112.3 |

K-Navi、HAZUSE、1geki、ちょんぼりすたで照合。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約53.6～53.7G/50枚**。
- 1gekiは53.6～53.7G、HAZUSEは全設定共通約53.7G、ちょんぼりすたは約53.6G表記。丸め精度差として扱う。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT疑似ボーナス: **約3.1枚/G**。

信頼度: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- 大当たりAT: **1回の権利あたり約500枚**。
- 金の玉V入賞、虹V入賞、BAR揃い等では **3回権利（約500枚×3回）**が濃厚/確定とする解析。
- 大当たり終了後は **32G**の引き戻しゾーン「くるくるタイム」へ移行。

PiDEAの発売記事、パチマガスロマガ、HAZUSE等で照合。

信頼度: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時はモードA/B/Cの3モードが存在し、「一発入魂チャンス」「タイマンバトル」の突入期待度が変化。
- クルーン成功率は設定により概ね約1/3、続くルーレット成功率は約2/3～70%程度。
- 通常ゲーム数天井は、2019年当時の主要解析で最終的な具体値が公表されず、後年整理資料では **天井なし（–）**表記。
- 物差しDBではゲーム数天井を `NONE_CONFIRMED` とし、存在するモードA～Cの全内部抽選テーブルは収集対象外。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior

- 1gekiの2019年11月時点「設定変更(リセット)時の挙動」は、天井G数・状態・モード・液晶ステージをすべて **調査中**としており、公開契約を提示していない。
- `ドリームクルーン2 / DREAM CRUNE 2 / Sドリームクルーン2CX / 9S0550 / オーイズミ` と設定変更・リセット・朝一等を組み替えて、HAZUSE、1geki、K-Navi、パチマガスロマガ、ちょんぼりすた、業界記事を再探索したが、本機固有の設定変更時モード/状態契約を固定できなかった。
- 一般的な6号機挙動から推測補完しない。

信頼度: UNVERIFIED_AFTER_RESEARCH

### carryOverBehavior

- 据え置き時のモードA～C、内部状態、くるくるタイム等の本機固有引継ぎ契約を直接明記した高信頼公開資料は固定できず `PUBLIC_DIRECT_CONTRACT_NOT_FOUND_AFTER_RESEARCH`。
- ゲーム数天井自体は後年整理資料で「なし」表記のため、宵越し天井ゲーム数という比較項目は `NOT_APPLICABLE` とする。

### powerCycleBehavior

- 1gekiの当時「電源OFF・ON時の挙動」は天井G数・状態・モード・液晶ステージをすべて調査中としている。
- その後の再探索でも純電源OFF→ONのみの本機固有契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- 通常ゲーム数天井は **NONE_CONFIRMED / 後年資料では天井なし表記**。
- よって天井進行の設定変更RESET/CARRY_OVERは `NOT_APPLICABLE_AS_PUBLIC_GAME_CEILING`。
- AT後32G「くるくるタイム」は通常ゲーム数天井ではなく、状態として別扱い。

### ceilingAfterReset

- 設定変更専用の短縮天井: `NOT_APPLICABLE / NONE_CONFIRMED`。
- 通常ゲーム数天井そのものが公開仕様として確認されない。

### modeAfterReset

- 通常時にモードA/B/Cが存在することはHAZUSEで確認。
- 設定変更時のモード選択/再抽選/据え置き引継ぎを示す機種固有公開値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset

- 設定変更時・据え置き時・純電断時の内部状態契約は `PUBLIC_DIRECT_CONTRACT_NOT_FOUND_AFTER_RESEARCH`。

### advantageousSectionReset

- 本機は6号機だが、設定変更/据え置き/純電断時の有利区間ランプや区間引継ぎを朝一契約として直接固定できる資料を今回確認できなかった。
- 他の6号機の一般論や同メーカー別機種から転記せず `UNVERIFIED_AFTER_RESEARCH`。

### resetBenefits

- 朝一/設定変更専用の短縮天井、専用モード優遇、特定CZ/AT優遇など比較可能な公開恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties

- 設定変更専用の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 本機固有の有利区間ランプによる朝一設定変更判別、ガックン、初期出目、ステージによる変更判別を固定できる高信頼資料は見つからず `PUBLIC_RESET_DETECTION_CONTRACT_NOT_FOUND_AFTER_RESEARCH`。
- 設定推測用のAT終了画面/ランプ示唆は存在するが、朝一設定変更判別とは別なのでresetDetectionへ混入させない。

### numericResetData / publicMorningNumbers

- 公開されている設定変更専用モード振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 朝一特定G以内当選率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- リセット恩恵発生率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- ガックン発生率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 短縮天井値: `NOT_APPLICABLE / NONE_CONFIRMED`。

### resetBehavior 再探索メモ

2026-09-11に `ドリームクルーン2 / DREAM CRUNE 2 / Sドリームクルーン2CX / 9S0550 / オーイズミ / OIZUMI` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 状態 / 有利区間 / 有利区間ランプ / ガックン / 変更判別` を組み合わせて再探索。1gekiの当時専用ページ自体が設定変更/電断項目を「調査中」としていることを確認し、HAZUSE、K-Navi、パチマガスロマガ、ちょんぼりすた、PiDEA等も横断した。性能コアと通常時モード存在は固定できたが、朝一resetBehaviorの直接契約は十分な再探索後も固定できなかったため `PARTIAL_RESEARCH_EXHAUSTED` とし、一般6号機挙動から補完しない。

## sources

取得日: 2026-09-11

1. PiDEA — パチスロ6号機「ドリームクルーン2」を20万円以下で発売
   - https://www.pidea.jp/articles/%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD6%E5%8F%B7%E6%A9%9F%E3%80%8C%E3%83%89%E3%83%AA%E3%83%BC%E3%83%A0%E3%82%AF%E3%83%AB%E3%83%BC%E3%83%B32%E3%80%8D%E3%82%9220%E4%B8%87%E5%86%86%E4%BB%A5%E4%B8%8B%E3%81%A7%E7%99%BA%E5%A3%B2
   - 2019-09-17のオーイズミ発売前会見を確認
   - reliability: INDUSTRY
2. PiDEA — 6号機でもクルーン健在「ドリームクルーン2」発売／オーイズミ
   - https://www.pidea.jp/articles/6%E5%8F%B7%E6%A9%9F%E3%81%A7%E3%82%82%E3%82%AF%E3%83%AB%E3%83%BC%E3%83%B3%E5%81%A5%E5%9C%A8%E3%80%8C%E3%83%89%E3%83%AA%E3%83%BC%E3%83%A0%E3%82%AF%E3%83%AB%E3%83%BC%E3%83%B32%E3%80%8D%E7%99%BA%E5%A3%B2%EF%BC%8F%E3%82%AA%E3%83%BC%E3%82%A4%E3%82%BA%E3%83%9F
   - 純増約3.1枚/G、1回500枚、3回権利1500枚、12月導入予定
   - reliability: INDUSTRY
3. グリーンべると — 東京都検定情報～10月7日公示
   - https://web-greenbelt.jp/00011556/
   - 型式Sドリームクルーン2CX、検定番号9S0550
   - reliability: INDUSTRY
4. HAZUSE — ドリームクルーン2
   - https://hazuse.com/machine/pachislot/9S0550/
   - 2019-12-02、型式/検定番号、設定別AT/機械割、約53.7G/50枚、モードA～C等
   - reliability: ANALYSIS_HIGH_DB
5. 1geki — ドリームクルーン2 解析・スペック
   - https://1geki.jp/slot/s_dc2/
   - 設定別AT/出玉率、導入日、純増約3.1枚/G、500枚権利
   - reliability: ANALYSIS_HIGH
6. 1geki — 天井/設定変更
   - https://1geki.jp/slot/s_dc2/3/
   - 当時の設定変更/電源OFF ON時の天井・状態・モード・ステージがすべて「調査中」であったことを確認
   - reliability: ANALYSIS_HIGH_CONTEMPORARY
7. 1geki — 小役/50枚ベース
   - https://1geki.jp/slot/s_dc2/4/
   - 約53.6～53.7G/50枚
   - reliability: ANALYSIS_HIGH
8. ちょんぼりすた — ドリームクルーン2
   - https://chonborista.com/slot/oizumi-slot/95079/
   - 2019-12-02、AT純増3.1枚、約53.6G/50枚、天井「–」、設定別性能
   - reliability: ANALYSIS_HIGH
9. パチマガスロマガ — ドリームクルーン2
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/46/a.php
   - 6号機、1回約500枚、3回権利等
   - reliability: ANALYSIS_HIGH_LEGACY_DB

## missingFields

- 設定変更/据え置き/純電源OFF→ON時の本機固有モード・状態契約
- 朝一有利区間ランプ契約
- 朝一設定変更判別要素
- 公開朝一専用数値

## conflicts

- baseGamesPer50の53.6G / 53.7G / 53.6～53.7Gは丸め精度差で、定義競合ではない。
- 天井について1geki当時ページは「調査中」、後年整理のちょんぼりすたは「–」。具体的ゲーム数天井を示す資料は横断再探索で固定できなかったため、本DBでは `NONE_CONFIRMED` とし、架空の数値を補完しない。

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
