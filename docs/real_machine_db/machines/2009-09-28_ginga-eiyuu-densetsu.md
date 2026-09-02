# 銀河英雄伝説

machineName: 銀河英雄伝説
manufacturer: ミズホ
formalModelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2009-09-28（K-Naviのホール導入開始日。ユニバーサルエンターテインメント公式は2009年9月発売）
generation: 5号機
systemType: ボーナス+ART / 押し順ART / G.S.RUSHによるARTゲーム数上乗せ
coreStatus: COMPLETE_CORE_FORMAL_MODEL_UNVERIFIED_RESET_BEHAVIOR_PARTIAL

## payoutRateBySetting

パチマガスロマガ旧解析:

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.1% |
| 2 | 99.2% |
| 3 | 102.1% |
| 4 | 106.1% |
| 5 | 110.0% |
| 6 | 119.6% |

confidence: OLD_ANALYSIS_HIGH

## initialHitBySetting

### ボーナス合成

パチマガスロマガ旧解析:

| 設定 | ボーナス合成 |
|---:|---:|
| 1 | 1/297.89 |
| 2 | 1/297.89 |
| 3 | 1/297.89 |
| 4 | 1/297.89 |
| 5 | 1/287.44 |
| 6 | 1/268.59 |

内訳:
- 同色ボーナス合成: 設定1〜4 1/431.16、設定5 1/409.60、設定6 1/372.36
- 異色ボーナス合成: 全設定共通 1/963.76

### ART初当たり

P-WORLD:

| 設定 | ART突入率 |
|---:|---:|
| 1 | 1/442.3 |
| 2 | 1/327.0 |
| 3 | 1/412.7 |
| 4 | 1/253.3 |
| 5 | 1/360.2 |
| 6 | 1/181.5 |

K-Naviのボーナス+ART合算は設定1→6で 1/176 / 1/154 / 1/172 / 1/136 / 1/158 / 1/108 とされ、奇偶差を伴う初当たり構造を補強する。

confidence: OLD_ANALYSIS_MULTI_SOURCE

## baseGamesPer50

パチマガスロマガ旧解析の「1000円あたりのゲーム数」を50枚ベースとして採用。

| 設定 | 50枚あたりゲーム数 |
|---:|---:|
| 1 | 36.2G |
| 2 | 36.2G |
| 3 | 36.2G |
| 4 | 36.1G |
| 5 | 36.0G |
| 6 | 35.9G |

confidence: OLD_ANALYSIS_HIGH

## netIncrease

- ART「銀河ラッシュ」: **約+2.0枚/G**
- ユニバーサル公式、K-Navi、P-WORLD、パチマガスロマガで一致。

confidence: OFFICIAL_PLUS_MULTI_SOURCE

## basicPayout

- ボーナス: パチマガスロマガ旧解析で**約105枚**（規定払い出し160枚）
- P-WORLDではボーナス仕様欄を「REG 約104枚」と表記しており、名称表記は資料間で揺れるが実獲得目安は約104〜105枚で近似一致。
- G.S.RUSH中の赤7揃い1回につきARTゲーム数 **33G or 99G** を上乗せ。
- 最大36連、最大ARTゲーム数 **3564G**。

confidence: OLD_ANALYSIS_MULTI_SOURCE_WITH_NAMING_DIFFERENCE

## modeSpecificMinimumData

- ユニバーサル公式: 業界初「M.B.S（マシンガンボーナスシステム）」、純増2.0枚/G、完全押し順ナビ。
- 通常時・空戦アタック・ボーナス中・天井などから赤7揃い→G.S.RUSH→ART「銀河ラッシュ」へ移行。
- G.S.RUSHは赤7揃いの1G連でARTゲーム数を上乗せ。1回33G or 99G、最大36連。
- ART「銀河ラッシュ」はボーナス成立では終了せず、獲得した規定ゲーム数を消化するまで継続。
- P-WORLDでART間**1600G**ハマりによりG.S.RUSHへ突入する天井を確認。変則押し/ナビ無視時はペナルティで1600G超となる場合あり。

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL_DIRECT_RESET_ADVANTAGE_PAGE_EXISTENCE_CONFIRMED**。K-Navi機種ページに本機固有の「設定変更後は狙い目?」「天井ゲーム数が短縮?」攻略項目が現存し、設定変更が朝一の天井挙動へ影響すること自体は確認できる。ただし該当記事本文の具体数値・条件を今回直接回収できず、天井カウンタの処理や短縮値を推測しない。

carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時のART間1600G天井進捗、G.S.RUSH/ART関連内部状態の引継ぎを示す本機固有の直接資料を確定できず。

powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時のART間天井進捗、内部状態、ART残ゲーム/待機状態等の処理について本機固有の直接資料を確定できず。

gameCounterReset: UNVERIFIED_AFTER_RESEARCH。通常のART間1600G天井は直接確認済み。K-Naviに設定変更時の天井短縮を示唆する専用記事項目は存在するが、設定変更で内部ART間カウンタを0G化するか、別値へ再セットするか、前日分を一部参照するかを本文なしで断定しない。

ceilingAfterReset: **RESET_CEILING_CHANGE_INDICATED_VALUE_UNVERIFIED**。K-Naviに「天井ゲーム数が短縮?」という本機固有項目が存在するため、設定変更時に通常1600Gとは異なる朝一天井挙動が存在する可能性は高い。ただし具体的短縮ゲーム数を回収できず `UNVERIFIED_AFTER_RESEARCH`。

modeAfterReset: UNVERIFIED_AFTER_RESEARCH。本機の朝一専用モード/モード再抽選率を示す直接資料は確認できず。

stateAfterReset: UNVERIFIED_AFTER_RESEARCH。空戦アタック/赤7揃い関連状態、ART待機/復帰状態等の設定変更時処理を示す直接資料は確認できず。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: **CEILING_SHORTENING_INDICATED_BUT_NUMERIC_VALUE_UNVERIFIED**。K-Naviの本機固有攻略カテゴリから設定変更後の天井短縮系恩恵が存在することを示す資料痕跡は確認。ただし朝一狙いに使える具体ゲーム数/期待値は直接本文を取得できず保存しない。

resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。設定変更固有の不利要素を示す本機固有資料は確認できず。

resetDetection: UNVERIFIED_AFTER_RESEARCH。`銀河英雄伝説 / ミズホ / 初代 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 1600G / ガックン / 初期出目 / 液晶 / ステージ` を組み替え、公式、K-Navi、P-WORLD、パチマガスロマガ、当時業界記事、古いDB/回顧を再探索したが、ガックンや表示による変更/据え置き判別の直接根拠を確定できず。

numericResetData:
  normalArtCeiling: 1600G ART間（ペナルティ時は超過あり）
  normalCeilingBenefit: G.S.RUSH突入
  resetSpecificCeiling: UNVERIFIED_AFTER_RESEARCH
  publishedResetHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedMorningStateRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_HIGH_VALUE_RESET_CEILING_CHANGE_INDICATED_NUMERIC_COUNTER_POWER_CARRYOVER_UNVERIFIED

resetBehaviorResearchNote:
- 表記揺れ `銀河英雄伝説 / パチスロ銀河英雄伝説 / ミズホ / 初代銀河英雄伝説` を使用。
- `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 1600G / 天井短縮 / ART / G.S.RUSH / ガックン / 初期出目 / 液晶 / ステージ` を組み替えて再探索。
- ユニバーサル公式、2009年グリーンべると、K-Navi、P-WORLD、パチマガスロマガ旧解析、後年回顧/機種一覧を横断。
- 2025年スマスロ「銀河英雄伝説 Die Neue These」の詳細なリセット情報は別機種のため初代へ転用しない。

## conflicts

- ボーナス名称/獲得表記: パチマガスロマガ旧解析はBIG約105枚、P-WORLDは「REG 約104枚」と表記。確率表では同色/異色ボーナスを複数名称で扱うため、実獲得目安の約104〜105枚のみ同一レンジとして保持し、名称は統合しない。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- resetSpecificCeilingNumeric: UNVERIFIED_AFTER_RESEARCH
- settingChangeGameCounterTreatment: UNVERIFIED_AFTER_RESEARCH
- carryOverBehaviorDetails: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- modeAfterReset: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. ユニバーサルエンターテインメント公式「銀河英雄伝説」 — https://www.universal-777.com/product/slot/gineiden/ — ミズホ、5号機、ボーナス+ART、2009年9月発売、M.B.S、純増2.0枚/G、完全押し順ナビ — reliability: OFFICIAL
2. ユニバーサルエンターテインメント公式「2009年パチスロ製品一覧」 — https://www.universal-777.com/product/slot/2009/ — 2009年9月発売のクロスチェック — reliability: OFFICIAL
3. グリーンべると「アルゼ、新機種と各台計数システムを発表」2009-08-19 — https://web-greenbelt.jp/00003250/ — 2009年8月18日発表、ミズホブランド、押し順ナビ機 — reliability: CONTEMPORARY_INDUSTRY
4. K-Navi「銀河英雄伝説」 — https://p-kn.com/slot/1044/ — ホール導入開始2009-09-28、BIG合算、ボーナス+ART合算、純増2.0枚/G、朝一攻略項目「設定変更後は狙い目?」「天井ゲーム数が短縮?」の存在 — reliability: OLD_ANALYSIS_HIGH
5. パチマガスロマガ旧解析「銀河英雄伝説」TOP — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/31/mizuho_slot_31.php — 攻略カテゴリ、設定変更時専用項目の存在 — reliability: OLD_ANALYSIS_HIGH
6. パチマガスロマガ旧解析「基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/31/a.php — ART純増2枚/G、最大3564G、ボーナス約105枚 — reliability: OLD_ANALYSIS_HIGH
7. パチマガスロマガ旧解析「小役確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/31/c.php — 1000円あたり35.9〜36.2G — reliability: OLD_ANALYSIS_HIGH
8. パチマガスロマガ旧解析「ボーナス確率/PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/31/h.php — 設定別ボーナス合成、機械割97.1〜119.6% — reliability: OLD_ANALYSIS_HIGH
9. P-WORLD「銀河英雄伝説」 — https://www.p-world.co.jp/machine/database/5673 — 5号機ART、ART設定別突入率、約104枚、33G/99G上乗せ、ART間1600G天井、純増約2.0枚/G — reliability: OLD_DB_HIGH

## quality

performanceCoreConfidence: HIGH
resetBehaviorConfidence: PARTIAL_RESET_CEILING_CHANGE_SIGNAL_DIRECT_BUT_NUMERIC_BEHAVIOR_UNVERIFIED
sourceCoverage: OFFICIAL + CONTEMPORARY_INDUSTRY + OLD_ANALYSIS_MULTI_SOURCE + OLD_DB
