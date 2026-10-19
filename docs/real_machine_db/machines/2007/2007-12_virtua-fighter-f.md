# バーチャファイターF

machineName: バーチャファイターF
manufacturer: ロデオ
releaseDate: 2007-12（具体ホール導入日 UNVERIFIED_AFTER_RESEARCH）
generation: 5号機
systemType: A+ART / ボーナス+周期CZ+完走型ART
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## identification

- ロデオ製。K-Naviの2007-12-19業界ニュースで、フィールズからロデオ製「バーチャファイターF」の発売決定が告知され、先行するRT仕様とは別のARTタイプと確認。
- パチンコFAN、5号機クロニクル、スロリスクタイムは2007年12月機として掲載する。
- ただし、検索語を `導入 / 発売 / 納品 / ホール導入 / 2007-12-24 / 12-25 / 2008-01 / 2008-02 / 検定` まで変更し、K-Navi、P-WORLD、当時業界履歴、メーカー別DBを横断したが、具体的なホール導入日/納品開始日は確定できなかった。よって月単位 `2007-12` とし、日付は推測しない。
- 2008-02-01更新の当時系業界史ページには「次機種（検定未）」「発売ほぼ確定」とする記録も残るため、実際の量産納品時期には資料上の不整合がある。2007年12月掲載DBを採用しつつ `CONFLICT_RELEASE_TIMING` として保持する。

## payoutRateBySetting

### パチマガスロマガ シミュレート値

| 設定 | PAYOUT |
|---|---:|
| 1 | 98.41% |
| 2 | 100.33% |
| 3 | 102.22% |
| 4 | 104.48% |
| 5 | 106.76% |
| 6 | 110.66% |

5号機まとめwikiの丸め値 `98.4 / 100.3 / 102.2 / 104.5 / 106.8 / 110.7%` と一致。

一方、後年回顧資料には `96.7 / 98.3 / 101.3 / 105.5 / 110.0 / 116.0%` という別系列がある。単なる丸めではなく差が大きいため平均せず `CONFLICT_PAYOUT` として保持する。

信頼度: `ANALYSIS_HIGH / CONFLICT`。

## initialHitBySetting

パチマガスロマガ掲載値。

| 設定 | BIG①合成（同色系） | BIG②合成（異色系） | 全BIG合成 | REG合成 | 全ボーナス合成 |
|---|---:|---:|---:|---:|---:|
| 1 | 1/897.75 | 1/897.75 | 1/448.88 | 1/897.75 | 1/299.25 |
| 2 | 1/873.81 | 1/873.81 | 1/436.91 | 1/873.81 | 1/291.27 |
| 3 | 1/851.12 | 1/851.12 | 1/425.56 | 1/851.12 | 1/283.71 |
| 4 | 1/829.57 | 1/829.57 | 1/414.78 | 1/829.57 | 1/276.52 |
| 5 | 1/809.09 | 1/809.09 | 1/404.54 | 1/809.09 | 1/269.70 |
| 6 | 1/771.01 | 1/771.01 | 1/385.51 | 1/771.01 | 1/257.00 |

5号機まとめwikiでも同色/異色BIGの丸め値と全合成 `1/299 → 1/257` が一致。

信頼度: `ANALYSIS_HIGH`。

## baseGamesPer50

パチマガスロマガ掲載の1000円あたりゲーム数。

| 設定 | 50枚あたり / 1000円あたりゲーム数 |
|---|---:|
| 1 | 36.15G |
| 2 | 36.69G |
| 3 | 37.25G |
| 4 | 37.83G |
| 5 | 38.42G |
| 6 | 39.03G |

信頼度: `ANALYSIS_HIGH`。

## netIncrease

- 完走型ART「最終決戦ステージ」: 50G。
- ART純増は当時5号機まとめwikiで `約1.2枚/G`。
- 後年回顧資料は `約1.3枚/G` とするため、平均せず `CONFLICT_NET_INCREASE: 1.2枚/G vs 1.3枚/G` として保持。

信頼度: `ANALYSIS_SINGLE / CONFLICT`。

## basicPayout

パチマガスロマガ / P-WORLDで整合。

- BIG①（同色揃い）: 444枚超払い出し終了、平均純増 約315枚。
- BIG②（異色揃い）: 294枚超払い出し終了、平均純増 約210枚。
- REG: 12Gまたは8回入賞で終了、平均純増 約56枚。

信頼度: `ANALYSIS_HIGH`。

## modeSpecificMinimumData

- ボーナス+CZ+ART機。
- ボーナス終了後はCZ「奥義体得ステージ/モード」へ移行。
- CZ中、通常リプレイより先に特殊リプレイ（リプ・リプ・ベル）を成立させるとARTへ、通常リプレイ（リプ・リプ・リプ）成立で通常へ転落する構造。
- ART「最終決戦ステージ」は50G完走型。ART終了後もCZへ戻りループを狙う。
- 通常状態777G経過後に周期CZへ突入する。
- 完全再現用の小役別ART突入率・ボーナス同時成立詳細は本DB対象外。

## resetBehavior

### settingChangeBehavior

`CONFIRMED_PARTIAL`。

当時5号機まとめwikiに、周期CZについて **「通常状態777G経過後に突入。RAMクリアしない限り設定変更してもG数は引き継ぐ」** と明記。

したがって設定変更そのものでは777G周期カウンタはクリアされず、RAMクリア時のみ初期化される仕様として保存する。

ただし、設定変更時のCZ/ART内部状態そのもの、ボーナス後高確状態、ART残Gの扱いを直接説明する資料は今回確定できず、該当部分は `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- 777G周期CZゲーム数: `CARRY_OVER_CONFIRMED`。設定変更でもRAMクリアしない限り引継ぎ。
- 据え置き時の777G周期G数: 上記仕様から通常のRAM保持状態では継続するものとして扱えるが、「据え置き」と明記した独立資料は未確認のため根拠文言は設定変更時資料を併記する。
- CZ/ART残状態・ART残G: `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

`UNVERIFIED_AFTER_RESEARCH`。

`電源OFF→ON / 電断 / 朝一 / RAM / 据え置き / バーチャファイターF` を組み替えて再探索したが、電源OFF→ONのみの場合の777Gカウンタ、CZ/ART状態、初期出目・液晶状態を直接説明する本機固有資料は確定できなかった。

「RAMクリアしない限り」という記述から電断時の挙動を推定して値を埋めず、明示情報のみ保存する。

### gameCounterReset

- 通常状態777Gで周期CZ突入。
- 設定変更: `NOT_RESET / CARRY_OVER_CONFIRMED`（RAMクリアしない限り）。
- RAMクリア: `RESET_CONFIRMED`。
- 電源OFF→ONのみ: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- 本機の777Gはボーナス天井ではなく **周期CZ到達ゲーム数**。
- 設定変更での短縮: `NONE_CONFIRMED`。むしろRAMクリアなしでは残Gを引き継ぐ。
- 設定変更専用の短縮CZ/短縮天井数値: `NONE_CONFIRMED`。

### modeAfterReset

朝一専用モード、設定変更専用モード振り分け: `NONE_CONFIRMED`。

ボーナス後CZ移行は通常ゲーム仕様であり、設定変更専用恩恵とは分ける。

### stateAfterReset

- 設定変更時のCZ/ART内部状態、ART残G、高確状態: `UNVERIFIED_AFTER_RESEARCH`。
- RAMクリア時の状態初期化範囲: 777G周期カウンタ以外は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

`NOT_APPLICABLE`（2007年5号機、有利区間制度前）。

### resetBenefits

- 設定変更時に777G周期カウンタを強制クリアしない点は、前日の進行G数を残せるため朝一の周期CZ狙いに影響し得る。
- 設定変更専用の天井短縮、CZ優遇率、朝一ART等: `NONE_CONFIRMED`。

### resetPenalties

設定変更時のみの主要な不利要素: `NONE_CONFIRMED`。

### resetDetection

- ガックン、初期出目、液晶表示、ランプ等による本機固有の設定変更/据え置き判別法: `UNVERIFIED_AFTER_RESEARCH`。
- 777G周期の挙動は変更時にも引き継ぐため、「周期G数が残っていること」だけでは設定変更否定材料にはならない。

### numericResetData

- 周期CZ: 通常状態 `777G` 到達。
- 設定変更時: RAMクリアしない限り周期G数引継ぎ。
- 設定変更専用のモード振り分け・朝一当選率・恩恵率: `NONE_CONFIRMED`。

## sources

取得日: 2026-09-01

1. K-Navi — 好評稼動中の「バーチャファイター」にARTタイプ登場!(ロデオ)
   - https://p-kn.com/topics/news/433/
   - 2007-12-19掲載。ロデオ製F発売決定、ARTタイプ、ボーナス後CZ、高確ステージで特殊リプレイからART突入。
   - reliability: INDUSTRY
2. パチマガスロマガ — ボーナス確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/47/h.php
   - 設定別BIG①/BIG②/REG/全合成、PAYOUT 98.41〜110.66%。
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — 小役確率・1000円あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/47/c.php
   - 設定別36.15〜39.03G/1000円。
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/47/a.php
   - A+CZ+ART、BIG①約315枚/BIG②約210枚/REG約56枚。
   - reliability: ANALYSIS_HIGH
5. P-WORLD — バーチャファイターF
   - https://www.p-world.co.jp/machine/database/5023
   - BIG①約315枚、BIG②約210枚、REG約56枚を照合。
   - reliability: ANALYSIS_HIGH
6. パチスロ5号機まとめwiki — バーチャファイターF
   - https://w.atwiki.jp/5gouki/pages/76.html
   - ART約1.2枚/G、777G周期CZ、RAMクリアしない限り設定変更でもG数引継ぎ、丸め確率/機械割。
   - reliability: ANALYSIS_SINGLE（当時更新系資料）
7. 5号機クロニクル — ロデオ5号機全機種一覧
   - https://5goki.com/rodeo
   - 2007年導入機種群にバーチャファイターFを収録。
   - reliability: ANALYSIS_SINGLE
8. パチンコFAN — 2007年度機種一覧
   - https://pacnk.com/photoslot/plist2007_0_0.html
   - 2007年12月欄にバーチャファイターFを掲載。
   - reliability: ANALYSIS_SINGLE
9. スロリスクタイム — 「は行」機種一覧
   - https://pachisuro100.com/hagyo/
   - バーチャファイターFをロデオ/ART/2007-12として掲載。
   - reliability: ANALYSIS_SINGLE
10. パチスロ業界初まとめ — 更新情報4
   - https://slothistory.com/kousin_kako04.html
   - 2008-02-01更新記録内でFを「次機種（検定未）」「発売ほぼ確定」と記録。2007-12掲載DBとの時期不整合の根拠。
   - reliability: ANALYSIS_SINGLE / ARCHIVAL
11. 後年回顧 — バーチャファイターシリーズ機械割ランキング
   - https://www.marimo0925.net/pacislot-kikaiwari-ranking-virtyrefighter-ban/
   - 別機械割系列96.7〜116.0%、50G ART、純増約1.3枚/G。
   - reliability: ANALYSIS_SINGLE

## missingFields

- 具体的な全国ホール導入日 / 納品開始日
- 電源OFF→ONのみの場合の周期G数/CZ/ART状態
- 設定変更時のCZ/ART残状態・ART残G・高確状態
- 本機固有のガックン/初期出目/表示等による設定変更判別

## conflicts

- `CONFLICT_RELEASE_TIMING`: 複数後年DBは2007-12機として収録する一方、2008-02-01更新の当時系業界史にはまだ「次機種（検定未）」「発売ほぼ確定」とする記録が残る。具体導入日は平均・推定せず未確定。
- `CONFLICT_PAYOUT`: パチマガ/5号機まとめwiki系列 `98.41 / 100.33 / 102.22 / 104.48 / 106.76 / 110.66%` に対し、後年回顧 `96.7 / 98.3 / 101.3 / 105.5 / 110.0 / 116.0%`。平均せず両系列保持。
- `CONFLICT_NET_INCREASE`: 当時系5号機まとめwiki `約1.2枚/G`、後年回顧 `約1.3枚/G`。平均せず保持。
