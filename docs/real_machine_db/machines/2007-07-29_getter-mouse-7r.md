# ゲッターマウス7R

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: ゲッターマウス7R
manufacturer: アルゼ
typeName: ゲッターマウス1
releaseDate: 2007-07-29
generation: 5号機
systemType: ボーナス主体/Aタイプ + ハマリ救済RT

## releaseDate evidence

- ユニバーサル公式製品アーカイブ: 2007年7月発売。
- グリーンべると2007-07-13記事: 新筐体7R第1弾として発表、納品は2007-07-29より。

時系列本線は当時業界記事の具体納品開始日2007-07-29を採用。

信頼度: INDUSTRY / OFFICIAL

## payoutRateBySetting

### HAZUSE掲載値

| 設定 | 機械割 |
|---|---:|
| 1 | 98.7% |
| 4 | 102.5% |
| 6 | 107.5% |
| H | 111.0% |

### パチマガスロマガ シミュレート値

| 設定 | PAYOUT |
|---|---:|
| 1 | 97.82% |
| 4 | 101.92% |
| 6 | 106.47% |
| H | 111.23% |

算出条件/攻略条件差が考えられるが同一値ではないため平均せずCONFLICTとして双方保持。

信頼度: CONFLICT（ANALYSIS_HIGH系列差）

## initialHitBySetting

### BIG

| 設定 | 確率 |
|---|---:|
| 1 | 1/287.44 |
| 4 | 1/273.07 |
| 6 | 1/256.00 |
| H | 1/240.06 |

### REG / ゲッターチャンス

| 設定 | 確率 |
|---|---:|
| 1 | 1/327.68 |
| 4 | 1/287.44 |
| 6 | 1/262.14 |
| H | 1/240.06 |

### ボーナス合算

| 設定 | 確率 |
|---|---:|
| 1 | 1/153.12 |
| 4 | 1/140.03 |
| 6 | 1/129.52 |
| H | 1/120.03 |

P-WORLD、K-Navi、HAZUSEで丸め差の範囲で一致。ユニバーサル公式も設定1合算約1/153.1を掲載。

信頼度: OFFICIAL_SUPPORT / ANALYSIS_HIGH

## baseGamesPer50

HAZUSE掲載の1000円あたりコイン持ち:

| 設定 | 1000円あたり |
|---|---:|
| 1 | 35.0G |
| 4 | 35.6G |
| 6 | 36.3G |
| H | 37.1G |

50枚貸しを前提とする当時表記のため、本DBのbaseGamesPer50比較値として使用。

信頼度: ANALYSIS_HIGH

## netIncrease

ハマリ救済RTの1Gあたり純増/減少の比較可能な公開数値は今回確定できずUNVERIFIED。

当時グリーンべるとはBIG後1000G / REG後800G到達で「リプレイ確率が大幅にアップする救済機能」と説明。通常のボーナス直後にRTへ入る機種ではない。

## basicPayout

- BIG: 約312枚
- REG / ゲッターチャンス: 約104枚

ユニバーサル公式、グリーンべると、HAZUSEで一致。

信頼度: OFFICIAL / INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時はボーナス主体のスタンダードタイプ。
- BIG後1000G消化でハマリ救済RT。
- REG後800G消化でハマリ救済RT。
- 通常のボーナス直後にRTを付与する仕様ではない。
- BIGは目押しによる技術介入で獲得枚数を若干アップ可能と当時業界記事に記載。
- 救済RTの細かな内部リプレイ確率等は物差し用途外なので収集しない。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `ゲッターマウス7R / ゲッターマウス1 / アルゼ / 7R` と `設定変更 / リセット / 朝一 / 天井 / ハマリ救済 / 据え置き / 電源OFF ON / ガックン` を組み替え、公式、当時業界記事、P-WORLD、HAZUSE、旧攻略資料を横断。
- P-WORLD当時掲示板で「天井は設定変更しても引き継ぐ」とする回答が確認できるが、ユーザー投稿であり高信頼な独立資料ではない。したがって設定変更時の救済RTゲーム数引継ぎは `COMMUNITY_SUPPORT / ANALYSIS_SINGLE` として保持し、高信頼確定にはしない。
- ボーナス成立/救済RT中の設定変更時状態処理はUNVERIFIED。

carryOverBehavior:
- 据え置き時の救済RTまでのゲーム数は通常遊技継続上は引継ぐと考えられるが、本ミッションでは推定転記せず、機種固有の明示資料を今回確定できなかったため高信頼欄はUNVERIFIED。
- 据え置き専用の朝一恩恵/不利はNONE_CONFIRMED。

powerCycleBehavior:
- 電源OFF→ONのみの場合にBIG後1000G / REG後800Gの進行が保持されるか、本機固有の高信頼公開資料を確定できずUNVERIFIED。

 gameCounterReset:
- 通常救済ラインはBIG後1000G / REG後800G。
- 設定変更でも引き継ぐとの当時P-WORLD掲示板情報あり。ただしCOMMUNITY_SUPPORT止まり。
- 電源OFF→ONの扱いはUNVERIFIED。

ceilingAfterReset:
- 設定変更時だけ短縮される救済RTゲーム数はNONE_CONFIRMED。
- 高信頼確定値としては通常のBIG後1000G / REG後800Gのみ。

modeAfterReset:
- ゲーム数モード管理型ではなく、朝一専用モードや設定変更時専用モードはNONE_CONFIRMED。

stateAfterReset:
- 救済RT中に設定変更/電断した場合のRT状態処理はUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機・有利区間制度導入前）。

resetBenefits:
- 設定変更時専用の短縮天井、朝一ボーナス優遇、朝一RT等はNONE_CONFIRMED。
- 設定変更でも救済ゲーム数が引き継がれるなら宵越し狙いが成立し得るが、根拠は当時コミュニティ情報のみなので確定恩恵として扱わない。

resetPenalties:
- 設定変更固有の主要不利要素はNONE_CONFIRMED。

resetDetection:
- 本機固有のガックン、表示、救済RT挙動を使った設定変更/据え置き判別は十分再探索したが高信頼で確定できずUNVERIFIED。

numericResetData:
- 通常救済RT発動: BIG後1000G / REG後800G（INDUSTRY / ANALYSIS_HIGH）
- 設定変更後短縮値: NONE_CONFIRMED
- 設定変更時救済G数引継ぎ: 当時P-WORLD掲示板で支持、COMMUNITY_SUPPORTのみ
- 朝一専用モード振り分け/朝一当選率/リセット恩恵発生率: NONE_CONFIRMED

## sources

取得日: 2026-08-31

1. ユニバーサルエンターテインメント公式 — ゲッターマウス7R
   - https://www.universal-777.com/product/slot/getter_mouse_7r/
   - アルゼ、5号機、2007年7月、ボーナス+RT、BIG約312枚、ゲッターチャンス約104枚、設定1合算約1/153.1
   - reliability: OFFICIAL
2. グリーンべると — 7つのリールを搭載し名機『ゲッターマウス』が復活（2007-07-13）
   - https://web-greenbelt.jp/00004245/
   - 型式名ゲッターマウス1、BB最大312枚、RBほぼ104枚、BIG後1000G/REG後800G救済、納品2007-07-29より
   - reliability: INDUSTRY
3. P-WORLD — ゲッターマウス7R
   - https://www.p-world.co.jp/machine/database/4826
   - BIG/REG設定別確率、型式名、2007年7月
   - reliability: ANALYSIS_HIGH / OLD_DB
4. HAZUSE — ゲッターマウス1解析・機種情報
   - https://hazuse.com/i/data/gettermouse/top.htm
   - 2007年7月、設定1/4/6/Hのコイン持ち35.0/35.6/36.3/37.1G、ボーナス確率、機械割98.7/102.5/107.5/111.0%、BIG約312枚、REG約104枚、BIG後1000G/REG後800G救済
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — ゲッターマウス1 ボーナス抽選/PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/aruze_slot/01/h.php
   - 設定別BIG/REG/合算精密値、PAYOUT 97.82/101.92/106.47/111.23%
   - reliability: ANALYSIS_HIGH
6. K-Navi — ゲッターマウス1
   - https://p-kn.com/slot/602/
   - 設定別BIG/ゲッターチャンス/合算を再照合
   - reliability: ANALYSIS_HIGH
7. P-WORLD掲示板 — ゲッターマウス7R「天井」スレッド
   - https://www.p-world.co.jp/kisyubbs/bbs.cgi?file=p4826
   - REG後閉店時の天井について「設定変更でも引き継ぐ」とする当時回答。ユーザー投稿のため補助根拠のみ
   - reliability: COMMUNITY_SUPPORT / ANALYSIS_SINGLE

## missingFields

- 救済RTの1Gあたり純増/減少値
- 設定変更時救済G数引継ぎの高信頼独立確認
- 電源OFF→ON時の救済G数/RT状態
- 救済RT中の設定変更/電断処理
- 本機固有のガックン/変更判別

## conflicts

- 機械割: HAZUSE 98.7/102.5/107.5/111.0% とパチマガスロマガ 97.82/101.92/106.47/111.23%。平均せず双方保持。
- 設定変更時の救済G数引継ぎ: 当時P-WORLD掲示板では引継ぎとの回答があるが、公式/業界/高信頼解析の独立確認が取れていないため高信頼確定にはしない。
