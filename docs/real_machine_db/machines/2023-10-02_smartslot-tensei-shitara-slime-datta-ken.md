# スマスロ転生したらスライムだった件

recordNo: 1594
machineName: スマスロ転生したらスライムだった件
aliases: 転スラ / L転生したらスライムだった件
manufacturer: 山佐（製造） / 山佐ネクスト（販売・市場表記）
formalModel: Lパチスロ転生したらスライムだった件CD
inspectionCode: 3S0494
releaseDate: 2023-10-02
generation: 6.5号機 / スマスロ
systemType: AT
settings: L / 1 / 2 / 4 / 5 / 6
coreStatus: COMPLETE_CORE
qaResetBehavior: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS

## identificationEvidence

- 遊技日本/P-WORLDの2023-08-10発表は、山佐ネクスト販売、製造元山佐、型式名 `Lパチスロ転生したらスライムだった件CD`、2023-10-02導入予定を明記。
- 東京都公安委員会検定通過情報（遊技通信/P-WORLD、2023-07-25）は同型式、山佐、検定番号 `3S0494` を掲載。
- 北海道公安委員会系検定一覧でも同型式・山佐・検定番号 `3S049400` を確認。DBでは従来形式に合わせ `3S0494` と記録。

信頼度: INDUSTRY_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.9% |
| 2 | 99.4% |
| 4 | 105.0% |
| 5 | 109.1% |
| 6 | 113.0% |

- 設定Lは搭載を確認できるが、公開固定機械割は確認できず。
- 遊技日本/P-WORLD、P-WORLD機種DB、なな徹で一致。

信頼度: INDUSTRY_HIGH + ANALYSIS_HIGH

## initialHitBySetting

AT「転スラっしゅ」初当り:

| 設定 | AT初当り |
|---|---:|
| 1 | 1/369.8 |
| 2 | 1/354.7 |
| 4 | 1/295.5 |
| 5 | 1/261.6 |
| 6 | 1/245.2 |

- P-WORLD/なな徹では丸め値 1/370 / 1/355 / 1/296 / 1/262 / 1/245。
- 遊技日本の小数値を採用し、丸め差はCONFLICT扱いしない。

信頼度: INDUSTRY_HIGH + ANALYSIS_HIGH

## baseGamesPer50

- 約36G/50枚。
- 一撃、必勝本、なな徹等で一致。

信頼度: ANALYSIS_HIGH

## netIncrease

- AT「転スラっしゅ」: 約2.5枚/G。
- 1セット40G+αの継続型AT。

信頼度: INDUSTRY_HIGH + ANALYSIS_HIGH

## ceilingAndModes

- 実ゲーム数天井: 通常時1000G消化でAT当選。
- 転スラポイント天井: 最大1200pt+αでAT当選。
- モード別最大規定pt: 通常A 1200pt+α / 通常B 1000pt+α / 通常C 1000pt+α / 天国 100pt+α。
- 転生ループ発動時は天国濃厚。

信頼度: ANALYSIS_HIGH

## resetBehavior

resetBehaviorQA: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS

settingChangeBehavior:
- 設定変更時: `有利区間 / 天井 / 内部状態 / モード / 転スラポイント` をRESET。
- 設定変更後は有利区間移行時にモンスターランク初期抽選を行う。
- `転生チャンス発動済み`条件は設定変更時にリセットされる。
- 転生状態は設定変更後・有利区間リセット後も引き継ぐとする解析系資料があり、本機の重要な例外状態として保持。

carryOverBehavior:
- 据え置き時: `有利区間 / 天井 / 内部状態 / モード / 転スラポイント` をCARRY_OVER。
- `転生チャンス発動済み`条件も据え置きではリセットされない。

powerCycleBehavior:
- 朝一の電源OFF→ON時にモンスターランク表示をAT当選まで隠す仕様はP-WORLDで確認。
- ただし純電源OFF→ONだけを独立条件として、天井G数 / 転スラpt / モード / 内部状態 / 有利区間 / 転生チャンス発動済み条件の全項目がどう処理されるかを列挙した機種固有高信頼資料は今回固定できず、内部契約は `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き契約をそのまま純電断契約へ推測転用しない。

gameCounterReset:
- 設定変更: 実ゲーム数天井・転スラポイントをRESET。
- 据え置き: CARRY_OVER。
- 純電断: UNVERIFIED_AFTER_RESEARCH。

ceilingAfterReset:
- 設定変更専用のゲーム数短縮天井は確認できず。実ゲーム数最大1000G、ポイントは選択モードに従う。
- モードは設定変更後に再抽選される。

modeAfterReset:
- 設定変更後/AT終了後（転生ループ中を除く）の公開モード振り分け:

| 設定 | 通常A | 通常B | 通常C or 天国 |
|---|---:|---:|---:|
| 1 | 33.2% | 33.2% | 33.6% |
| 2 | 32.8% | 32.8% | 34.4% |
| 4 | 30.9% | 30.9% | 38.2% |
| 5 | 27.3% | 27.3% | 45.4% |
| 6 | 26.6% | 26.6% | 46.8% |

- 設定変更以外の有利区間リセット（転生ループ等）では天国濃厚。

stateAfterReset:
- 有利区間移行時の初期モンスターランク抽選を確認。
- 朝一/有利区間リセット後は内部モンスターランクをAT開始まで隠す。
- 転生状態は設定変更・有利区間リセットを跨いで引き継ぐ解析報告を保持。

advantageousSectionReset:
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- AT終了後の一部 / エンディング終了後などでも有利区間リセットが発生し、転生ループへつながる。
- 純電断単独: UNVERIFIED_AFTER_RESEARCH。

resetBenefits:
- 設定変更後から最初の転生チャンスまで、発生率が通常約 `1/2048` から `1/799` へ上昇。
- 設定変更後にモード再抽選。設定1でも通常Cまたは天国が33.6%、高設定ほど同区分が優遇。
- 有利区間移行時にモンスターランク初期抽選。

resetPenalties:
- 公開された設定変更専用の確定的不利は確認できず。
- 転生状態は設定変更でも引継ぎとされるため、状態を一律消去する前提は採用しない。

resetDetection:
- なな徹は設定変更判別を「調査中」としており、確定判別法は公開固定できず。
- 朝一はモンスターランク表示を隠すため、初回ATの表示ランクだけでは据え置き確定にならない。
- 有利区間ランプや本機固有ガックンによる確定的変更判別は `UNVERIFIED_AFTER_RESEARCH`。

numericResetData:
- 転生チャンス発生率: 通常約1/2048 → 設定変更後の初回まで1/799。
- 設定変更後/AT終了後モード振り分け: 上表。
- 初期モンスターランクにも設定別公開振り分けあり。ただし本DBの物差し用途では詳細内部抽選を全転載せず、初期抽選の存在と高設定優遇を記録。
- 設定変更専用短縮天井: PUBLIC_VALUE_NOT_FOUND / NONE_CONFIRMED。

## sources

取得日: 2026-09-13

1. 遊技日本 / P-WORLD — 山佐「スマスロ転生したらスライムだった件」発表（2023-08-10）
   - https://news.p-world.co.jp/articles/25028/nippon
   - 型式、製造/販売主体、AT確率、機械割、純増、導入開始日
   - reliability: INDUSTRY_HIGH
2. 遊技通信 / P-WORLD — 東京都公安委員会検定通過状況（2023-07-25）
   - https://news.p-world.co.jp/articles/24848/yugitsushin
   - 型式 `Lパチスロ転生したらスライムだった件CD`、山佐、検定番号3S0494
   - reliability: OFFICIAL_REGULATORY_REPRINT_HIGH
3. P-WORLD 機種DB — スマスロ転生したらスライムだった件
   - https://www.p-world.co.jp/machine/database/9879
   - AT/機械割、天井、モード、転生ループ、朝一モンスターランク表示仕様
   - reliability: INDUSTRY_DB_HIGH
4. なな徹 — 朝一・設定変更時の挙動
   - https://nana-press.com/kaiseki/machine/606/16881/
   - 設定変更/据え置きの有利区間・天井・内部状態・モード・転スラpt、転生チャンス1/799、判別調査中
   - reliability: ANALYSIS_HIGH
5. なな徹 — 解析情報/モード
   - https://nana-press.com/kaiseki/machine/606/
   - https://nana-press.com/kaiseki/machine/606/16883/
   - 約36G/50枚、純増約2.5枚/G、モード移行、転生ループ、有利区間リセット
   - reliability: ANALYSIS_HIGH
6. 一撃 — 天井 / 設定変更、小役・ベース
   - https://1geki.jp/slot/l_tensura/3/
   - https://1geki.jp/slot/l_tensura/4/
   - 実G天井1000G、pt天井、約36G/50枚、朝一有利区間移行時のランク抽選
   - reliability: ANALYSIS_HIGH
7. パチスロ必勝本 — 基本スペック
   - https://p.hisshobon.jp/vpage/2556/2
   - 導入日、純増、約36G/50枚
   - reliability: ANALYSIS_HIGH
8. ぽこすろっと — 転スラ天井/朝一
   - https://www.nankaikoya.jp/tensura-kitaichi/
   - 転生状態が設定変更後・有利区間リセット後も引き継ぐ旨
   - reliability: ANALYSIS_SUPPORT

## missingFields

- 純電源OFF→ON単独時の天井G数 / 転スラpt / モード / 内部状態 / 有利区間 / 転生チャンス発動済み条件の完全な機種固有契約
- 本機固有ガックン等による確定的な設定変更判別
- 設定Lの公開固定機械割

## conflicts

- AT初当りは遊技日本の小数値とP-WORLD/なな徹の丸め値があるが、丸め差として同一値扱い。
- 製造元は山佐、販売・市場表記は山佐ネクスト。役割差として併記しCONFLICTにしない。

## status

COMPLETE_CORE
