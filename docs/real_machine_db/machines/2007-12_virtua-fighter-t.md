# バーチャファイターT

machineName: バーチャファイターT
manufacturer: ロデオ
formalType: UNVERIFIED
generation: 5号機
releaseDate: 2007-12
systemType: ボーナス + CZ + 完走型RT
coreStatus: PARTIAL
resetBehaviorQA: PARTIAL

## release / identity

- サミー公式の2007年製品一覧で、ロデオ製 `バーチャファイターT` を **2007.12** と確認。
- グリーンべると2007-10-26記事では、ロデオ製『バーチャファイター』の発表展示会を11月1日からフィールズ全国拠点で開催すると報道し、完走型RTループタイプであることを確認できる。
- P-WORLD、K-Navi、パチマガスロマガにも `バーチャファイターT` として独立掲載がある。
- 具体的な納品開始日/ホール導入日は、`バーチャファイターT / バーチャファイター / ロデオ / フィールズ / 納品 / 導入 / ホール導入 / 12月` を組み替え、公式・当時業界・攻略DB・旧資料を横断したが高信頼の具体日を確定できず、月精度 `2007-12` とする。

信頼度: OFFICIAL（月） / INDUSTRY（発表・システム） / UNVERIFIED（日）

## payoutRateBySetting

K-Navi:

| 設定 | 機械割 |
|---|---:|
| 1 | 96.2% |
| 2 | 98.6% |
| 3 | 101.0% |
| 4 | 104.8% |
| 5 | 109.2% |
| 6 | 114.1% |

5号機まとめwiki:

| 設定 | 機械割 |
|---|---:|
| 1 | 96.3% |
| 2 | 98.7% |
| 3 | 101.0% |
| 4 | 104.9% |
| 5 | 109.2% |
| 6 | 114.1% |

- 設定1/2/4に0.1pt差があるため平均化せず `CONFLICT_ROUNDING_OR_DEFINITION` として両系列を保持する。
- 後年ランキング資料も5号機まとめwiki系列の96.3〜114.1%を掲載しているが、独立一次値とは扱わない。

信頼度: ANALYSIS_HIGH / CONFLICT_DETAIL

## initialHitBySetting

K-Navi:

| 設定 | BIG合算 | REG合算 | 全ボーナス合算（計算上の目安） |
|---|---:|---:|---:|
| 1 | 1/399.6 | 1/799.2 | 約1/266.4 |
| 2 | 1/381.0 | 1/762.1 | 約1/254.0 |
| 3 | 1/364.1 | 1/728.2 | 約1/242.7 |
| 4 | 1/348.6 | 1/697.2 | 約1/232.4 |
| 5 | 1/334.4 | 1/668.7 | 約1/222.9 |
| 6 | 1/309.1 | 1/618.3 | 約1/206.1 |

- 5号機まとめwikiは全ボーナス合算を `1/266 / 1/254 / 1/243 / 1/232 / 1/223 / 1/206` と掲載し、上記と丸め範囲で整合する。
- 実機完全再現用の個別フラグ確率は本物差しでは必須外のため追加しない。

信頼度: ANALYSIS_HIGH / SECONDARY_CORROBORATED

## baseGamesPer50

- `1000円あたり / 1000円 / 50枚あたり / 50枚 / ベース / コイン持ち` を機種名、メーカー名、シリーズ名と組み替え、パチマガスロマガ、K-Navi、P-WORLD、旧攻略サイト、5号機まとめwikiを再探索。
- 小役確率からの独自逆算は定義差を生むため行わず、比較可能な直接掲載値を確定できなかった。

status: `UNVERIFIED_AFTER_RESEARCH`

## netIncrease

- 44Gの完走型RT `最終決戦ステージ` を搭載。
- 5号機まとめwikiではRT純増 **約+0.7枚/G**。
- グリーンべるとは「RT突入＋RT継続＋ボーナス」のVFL期待値約70%と報道。
- K-Naviは、全ボーナス後のCZ `奥義体得ステージ` で通常リプレイより先に特殊リプレイを引くと44G RTへ突入すると説明。

信頼度: INDUSTRY / ANALYSIS_HIGH

## basicPayout

P-WORLD・パチマガスロマガで一致する実獲得目安:

- 同色BIG: 444枚超払い出しで終了、平均純増 **約315枚**。
- 異色BIG（MIDDLE BONUS相当）: 294枚超払い出しで終了、平均純増 **約210枚**。
- REG: 12Gまたは8回入賞で終了、平均純増 **約56枚**。

信頼度: INDUSTRY_DB / ANALYSIS_HIGH

## modeSpecificMinimumData

- 全ボーナス後にCZ `奥義体得ステージ`。
- CZ中、通常リプレイより先に特殊リプレイ成立で44G完走型RT `最終決戦ステージ` へ。
- 通常状態を **300G** 消化すると周期CZへ入る公開解析あり。
- RT純増約+0.7枚/G。
- 有利区間は制度導入前で非該当。

## resetBehavior

### settingChangeBehavior

- 5号機まとめwikiに、周期CZまでの通常状態300Gについて **「RAMクリアしない限り設定変更してもG数は引き継ぐ」** と明記。
- よって通常時周期CZカウンタは、通常の設定変更だけではリセットされない挙動を `CONFIRMED_ANALYSIS` として記録する。
- 設定変更時にCZ中/44G RT中だった場合のCZ・RT状態そのもの、RT残Gの処理は直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- 据え置きで通常状態300G周期カウンタが消去されるという資料はなく、同解析の「RAMクリアしない限り」条件と整合して引継ぎ側と読めるが、本DBでは据え置き専用の直接記述と区別する。
- 通常時周期G数: `CARRY_OVER_SUPPORTED_BY_ANALYSIS_CONTEXT`。
- CZ/RT中の状態・残G: `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 電源OFF→ONのみで通常時周期カウンタ/CZ/RT状態/RT残Gがどう扱われるかを本機固有に明記する直接資料は確定できなかった。
- `電源OFF ON / 電断 / 再起動 / RAMクリア / 据え置き` まで検索語変更済み。

status: `UNVERIFIED_AFTER_RESEARCH`

### gameCounterReset

- 通常状態300Gで周期CZへ入る。
- **設定変更のみでは周期G数を引き継ぐ**（RAMクリアしない限りリセットされない）。
- これはボーナス当選天井ではなく、RT突入契機となるCZへの周期ゲーム数。

status: `CONFIRMED_ANALYSIS`

### ceilingAfterReset

- 設定変更時の短縮周期、短縮天井、朝一専用天井の公開値は `NONE_CONFIRMED`。
- むしろ通常の設定変更では300G周期カウンタを引き継ぐ解析がある。

### modeAfterReset

- 設定変更時の専用モード再抽選、朝一専用モード、公開振り分けは `NONE_CONFIRMED`。

### stateAfterReset

- 通常時の周期G数引継ぎは確認済み。
- CZ中/RT中の設定変更・据え置き・電源OFF→ONで内部状態やRT残Gがどうなるかは `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE`（有利区間制度導入前）。

### resetBenefits

- 設定変更による周期CZカウンタの消去がなく、前日の通常時消化G数を引き継ぐ点は、客側から見れば朝一の周期CZ狙いに影響し得る重要特性。
- 設定変更時のみの追加優遇、RT直行、短縮周期などは `NONE_CONFIRMED`。

### resetPenalties

- 設定変更時固有の公開不利要素は `NONE_CONFIRMED`。

### resetDetection

- 設定変更のみで周期G数がリセットされないため、**300G周期到達の挙動だけで変更/据え置きを単純判別できない**。
- 本機固有のガックン、初期出目、液晶/ランプによる変更判別は、`朝一 / ガックン / 変更判別 / 据え置き判別` まで再探索しても直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData

- 設定変更のみ: 通常時周期CZカウンタ **引継ぎ**。
- 周期CZ: 通常状態 **300G**。
- 設定変更時専用のモード振り分け、朝一当選率、短縮G数などは `NONE_CONFIRMED`。

## sources

取得日: 2026-09-01

1. サミー公式 — パチスロ製品一覧
   - https://www.sammy.co.jp/japanese/products/pachislot/index.html
   - ロデオ `バーチャファイターT`、2007.12を確認。
   - reliability: OFFICIAL
2. グリーンべると — バーチャファイター展示会、11月1日よりスタート
   - https://web-greenbelt.jp/00006462/
   - 2007-10-26記事。ロデオ製、11/1から発表展示会、完走型RTループ、VFL期待値約70%。
   - reliability: INDUSTRY
3. K-Navi — バーチャファイターT
   - https://p-kn.com/slot/732/
   - 設定別BIG/REG、機械割、全ボーナス後CZ、44G完走型RT。
   - reliability: ANALYSIS_HIGH
4. P-WORLD — バーチャファイターT
   - https://www.p-world.co.jp/machine/database/4976
   - 同色BIG約315枚、MIDDLE BONUS約210枚、REG約56枚。
   - reliability: INDUSTRY_DB
5. パチマガスロマガ — バーチャファイターT 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/46/a.php
   - 44G完走型RT、各ボーナスの規定払い出し・純増目安。
   - reliability: ANALYSIS_HIGH
6. パチスロ5号機まとめwiki — バーチャファイターT
   - https://w.atwiki.jp/5gouki/pages/75.html
   - RT純増約+0.7枚/G、周期CZ300G、RAMクリアしない限り設定変更でもG数引継ぎ、設定別機械割/ボーナス合算。
   - reliability: ANALYSIS_ARCHIVE
7. SLONET旧攻略 — バーチャファイターT
   - https://slonet.sakura.ne.jp/kouryaku/virtuafighter.html
   - ボーナス獲得条件、設定別概算確率・機械割、通常時300GでRTのCZへ入る旨を照合。
   - reliability: ANALYSIS_ARCHIVE

## missingFields

- 具体的な納品開始日/ホール導入日
- 正式型式名
- 比較可能な50枚あたりゲーム数
- CZ/44G RT中の設定変更・据え置き・電源OFF→ON時の状態/残G処理
- 電源OFF→ONのみの通常時周期カウンタ処理を本機固有に明記する直接資料
- 本機固有のガックン等変更判別

## conflicts

- 機械割: K-Navi `96.2 / 98.6 / 101.0 / 104.8 / 109.2 / 114.1%`、5号機まとめwiki `96.3 / 98.7 / 101.0 / 104.9 / 109.2 / 114.1%`。設定1/2/4で0.1pt差。平均せず双方保持。
