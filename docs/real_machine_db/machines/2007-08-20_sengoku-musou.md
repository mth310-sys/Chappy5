# パチスロ戦国無双

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: パチスロ戦国無双
manufacturer: 山佐
releaseDate: 2007-08-20
generation: 5号機
systemType: A+ART / リプパン回避型ART

## releaseDate evidence

- 山佐公式は稼働時期を2007年8月と掲載。
- 2007-07-20付グリーンべるとは「納品は8月19日からの予定」。
- 2007-08-01付K-Navi業界ニュースは山佐直営2店舗への8/8・8/10先行導入と、一般ホールへの導入予定日2007-08-20を明記。
- パチビーは2007-08-21導入。

本DBの時系列本線は直前引継ぎ方針どおり一般ホール導入予定2007-08-20を採用。8/19納品開始、8/8・8/10直営先行、8/21別DB表記は定義差として併記する。

信頼度: INDUSTRY / OFFICIAL_SUPPORT

## payoutRateBySetting

公開整理値に差があるため平均せずCONFLICT。

| 設定 | HAZUSE | 5号機クロニクル | 当時5号機まとめwiki |
|---|---:|---:|---:|
| 1 | 97% | 97.4% | 97% |
| 2 | 100% | 99.6% | 99% |
| 3 | 102% | 101.7% | 101% |
| 4 | 104% | 103.9% | 103% |
| 5 | 107% | 107.0% | 106% |
| 6 | 111% | 111.4% | 112% |

信頼度: CONFLICT

## initialHitBySetting

HAZUSE掲載値:

| 設定 | BIG | REG / BATTLE GAME | 合算 |
|---|---:|---:|---:|
| 1 | 1/455.1 | 1/789.6 | 1/288.7 |
| 2 | 1/448.9 | 1/780.2 | 1/284.9 |
| 3 | 1/442.8 | 1/762.1 | 1/280.1 |
| 4 | 1/436.9 | 1/753.3 | 1/276.5 |
| 5 | 1/431.2 | 1/736.4 | 1/271.9 |
| 6 | 1/425.6 | 1/728.2 | 1/268.6 |

当時5号機まとめwikiでは丸め値としてBIG 1/455→1/426、REG 1/790→1/728、合算1/289→1/269で整合。K-Navi当時ページは設定別確率を未発表としているため、上記は後年解析/整理値として扱う。

信頼度: ANALYSIS_HIGH / RETROSPECTIVE

## baseGamesPer50

- 2007-07-20付グリーンべると: 1000円あたり約33G。

50枚貸し相当の比較値として約33G/50枚を採用。

信頼度: INDUSTRY

## netIncrease

ART「戦国RUSH」。

- 山佐公式: 1Gあたり純増約1.0枚超。
- 2007-07-20付グリーンべると: 1Gあたり純増1枚。
- P-WORLD / パチビー: 約1.1枚/G。

約1.0〜1.1枚/Gの表記差を平均せず保持。物差し上は「約1枚/G級」と分類する。

信頼度: OFFICIAL / INDUSTRY / CONFLICT_ROUNDING

## basicPayout

- BIG: 純増約274枚。
- BATTLE GAME / REG: 純増約63枚。

2007年当時グリーンべると、P-WORLDで一致。

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData

- BIG後は戦国RUSHへ必ず突入。
- ARTはボーナス成立またはSIN入賞で終了。SINナビに従えばパンク回避可能。
- 選択武将（真田幸村/服部半蔵/前田慶次）によりSINナビ/継続システムが異なる。
- BATTLE GAME中の信長戦勝利で無限戦国RUSH。
- 通常時に高確率ステージ「戦国チャンス」があり、同状態でのボーナスはART性能面で優遇される。
- P-WORLD/パチビーは「天井あり」と分類するが、今回の再探索では初代2007年機の比較可能な天井到達G数・恩恵数値を高信頼資料で確定できずUNVERIFIED。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `パチスロ戦国無双 / センゴクムソウJ / 山佐 / 初代 / 2007` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 戦国RUSH / 戦国チャンス / ガックン` を組み替え、山佐公式、当時業界記事、K-Navi、P-WORLD、パチビー、HAZUSE、旧5号機wiki、5号機クロニクル、回顧資料を横断。
- 設定変更時に天井ゲーム数、戦国チャンス状態、ART/RT状態、武将選択関連状態をどう扱うか、本機固有の高信頼公開情報は確定できずUNVERIFIED。

carryOverBehavior:
- 据え置き時の天井ゲーム数・内部状態・ART/RT状態の引継ぎは本機固有資料を確定できずUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみの場合の天井ゲーム数、戦国チャンス、ART/RT状態の扱いはUNVERIFIED。

gameCounterReset:
- 天井搭載自体はP-WORLD/パチビーで確認。
- 設定変更時に内部天井ゲーム数がリセットされるか引継ぐかはUNVERIFIED。

ceilingAfterReset:
- 初代2007年機の通常時天井具体G数、設定変更時の短縮天井/変更値は十分再探索後もUNVERIFIED。

modeAfterReset:
- 朝一専用モード、設定変更時専用モード振り分けはNONE_CONFIRMED。
- 戦国チャンス等の状態処理はUNVERIFIED。

stateAfterReset:
- 高確状態、ART/RT状態、SINナビ関連状態の設定変更時処理はUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機・有利区間制度導入前）。

resetBenefits:
- 朝一ART、短縮天井、変更時専用の当選率優遇など公開された主要恩恵はNONE_CONFIRMED。

resetPenalties:
- 設定変更固有の主要不利要素はNONE_CONFIRMED。

resetDetection:
- 本機固有のリールガックン、液晶表示、ゲーム数挙動等による設定変更/据え置き判別は、検索語・資料系統を変えて再探索したが高信頼情報を確定できずUNVERIFIED。

numericResetData:
- 設定変更時モード振り分け: NONE_CONFIRMED
- 朝一特定G以内当選率/期待度: NONE_CONFIRMED
- リセット短縮天井: UNVERIFIED
- リセット恩恵発生率: NONE_CONFIRMED
- 公開朝一数値: NONE_CONFIRMED

## sources

取得日: 2026-08-31

1. 山佐ネクスト公式 — パチスロ戦国無双
   - https://yamasa-next.co.jp/model_sgm/
   - 5号機A+ART、稼働2007年8月、戦国RUSH約1.0枚超/G、BIG後必ず突入、無限RUSH等
   - reliability: OFFICIAL
2. グリーンべると — 3種類のART搭載『戦国無双』登場（2007-07-20）
   - https://web-greenbelt.jp/00004238/
   - 納品8/19予定、ART純増1枚/G、BIG約274枚、RB約63枚、1000円約33G
   - reliability: INDUSTRY
3. K-Navi — 「パチスロ戦国無双」先行導入決定!（2007-08-01）
   - https://p-kn.com/topics/news/294/
   - 直営8/8・8/10先行、一般ホール8/20予定、ART約1.0枚超/G
   - reliability: INDUSTRY
4. P-WORLD — パチスロ戦国無双「2007年」
   - https://www.p-world.co.jp/machine/database/4848
   - 5号機ART、天井あり、約1.1枚/G、BIG約274枚、BG約63枚
   - reliability: OLD_DB / ANALYSIS_HIGH
5. パチビー — パチスロ「戦国無双」
   - https://www.pachibee.jp/machines/about/209080028
   - 導入2007-08-21、天井あり、約1.1枚/G、BIG/BGとART構造
   - reliability: OLD_DB
6. HAZUSE — パチスロ戦国無双
   - https://hazuse.com/machine/pachislot/7S0470/
   - 型式センゴクムソウJ、設定別BIG/REG/合算、機械割
   - reliability: ANALYSIS_HIGH / RETROSPECTIVE
7. パチスロ5号機まとめwiki — 戦国無双
   - https://w.atwiki.jp/5gouki/pages/72.html
   - 2008年更新の設定別BIG/REG/合算/機械割
   - reliability: OLD_ANALYSIS
8. 5号機クロニクル — 山佐5号機全機種一覧
   - https://5goki.com/yamasa
   - 戦国無双の機械割97.4〜111.4%
   - reliability: ANALYSIS_SINGLE / RETROSPECTIVE

## missingFields

- 初代2007年機の天井具体G数/恩恵
- 設定変更時の天井ゲーム数リセット/引継ぎ
- 据え置き/電源OFF→ON時の天井・状態・ART/RT処理
- 朝一専用数値
- 本機固有の設定変更判別/ガックン

## conflicts

- 導入日定義: 山佐直営先行8/8・8/10、グリーンべると納品8/19、K-Navi一般ホール8/20予定、パチビー8/21。本線は一般ホール基準2007-08-20。
- 機械割: HAZUSE 97/100/102/104/107/111%、5号機クロニクル97.4/99.6/101.7/103.9/107.0/111.4%、当時wiki97/99/101/103/106/112%。平均せず全根拠を保持。
- ART純増: 公式/当時業界約1.0枚超〜1.0枚/G、P-WORLD/パチビー約1.1枚/G。平均せず表記差として保持。
