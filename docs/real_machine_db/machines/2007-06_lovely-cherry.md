# ラブリーチェリー

machineName: ラブリーチェリー
aliases: モエるまりんバトる（ラブリーチェリー） / Lovely Cherry
manufacturer: エレコ
releaseDate: 2007-06
generation: 5号機初期
systemType: ボーナス + CZ + RT / 技術介入
coreStatus: PARTIAL
qaResetBehavior: PARTIAL

## releaseDateEvidence

- ユニバーサルエンターテインメント公式製品ページは `発売 2007年6月` と明記。
- P-WORLDの2007年6月新台カレンダーにもラブリーチェリーを掲載。
- 後年整理資料も2007年6月としている。
- 前handoffの2007-07-09候補は時系列誤りと判断し、本DBではメーカー公式の発売月 `2007-06` を本線採用する。具体的なホール導入日までは今回確定できず、月粒度で保持する。

信頼度: OFFICIAL

## payoutRateBySetting

K-Navi:

| 設定 | 機械割 |
|---|---:|
| 1 | 97.0% |
| 4 | 102.0% |
| 6 | 109.0% |

パチマガスロマガ旧ページのシミュレート値:

| 設定 | PAYOUT |
|---|---:|
| 1 | 98.59% |
| 4 | 103.50% |
| 6 | 109.21% |

5号機クロニクル:

| 設定 | 機械割 |
|---|---:|
| 1 | 98.1% |
| 4 | 102.8% |
| 6 | 109.0% |

- 設定1/4で差が大きいため平均せずCONFLICTとして保持する。

信頼度: CONFLICT

## initialHitBySetting

K-Naviとパチマガスロマガ旧ページでほぼ一致。

| 設定 | 赤7BIG | 青7BIG | BIG合算 |
|---|---:|---:|---:|
| 1 | 1/819.20 | 1/819.20 | 1/409.60 |
| 4 | 1/771.01 | 1/771.01 | 1/385.51 |
| 6 | 1/712.35 | 1/712.35 | 1/356.17 |

- 本機の主ボーナスは赤7/青7BIG。今回確認できた旧解析ではREG確率は掲載されていないため、REG搭載の有無を含め別型式混同を避けて未記入とする。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

- `ラブリーチェリー / モエるまりんバトる / エレコ / 1000円 / 50枚 / ベース / コイン持ち` の表記揺れで、メーカー公式・旧攻略・古いDB・回顧資料まで再探索したが、比較可能な設定別または代表値を確定できずUNVERIFIED。

## netIncrease

- BIG終了後は必ずCZ「チャレンジゾーン」へ突入。
- CZ中、プラム入賞で33GのRT「追跡ゲーム（追跡タイム）」へ突入、チェリー入賞で通常ゲームへ転落。
- 当時のスロ板テンプレ保存資料ではRT純増 `約+1枚/G` と記載。
- RT33G消化後は再びCZへ戻り、ポイント/技術介入でRTループを狙う。

信頼度: OFFICIAL（33G/CZ構造） + OLD_ANALYSIS_SINGLE（純増）

## basicPayout

パチマガスロマガ旧ページ:
- BIG: 460枚超の払い出しで終了
- 純増: 約360枚

5号機クロニクルは `BIG約344枚 / REG約116枚` と掲載するが、公式/旧解析で確認した本機の赤7・青7BIG中心構成と整合しない可能性があるため、別機種/別定義混入余地を含めCONFLICT候補として採用せず注記のみ残す。

信頼度: ANALYSIS_HIGH / CONFLICT_CAUTION

## modeSpecificMinimumData

### チャレンジゾーン / 追跡ゲーム

- BIG終了後は必ずチャレンジゾーン。
- チャレンジゾーン中のプラム入賞で33G RT、チェリー入賞で通常へ。
- BIG中のミニゲーム等で獲得するポイントは、CZからRTへの突入期待度に直結し内部に蓄積する。
- 古い解析テンプレでは、CZ終了後1200G消化でも再度チャレンジゾーンへ突入するとされる。
- 全ポイント振り分けやチェリー種別の詳細抽選は実機完全再現領域のため収集対象外。

信頼度: OFFICIAL + OLD_ANALYSIS_SINGLE

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- 当時の解析テンプレ保存資料では、設定変更後は内部的にチャレンジゾーンからスタートするとされる。
- P-WORLD旧掲示板にも「設定変更した場合、朝一チャレンジゾーンから始まる」という当時認識が残るが、掲示板情報単独では一次解析とはしない。
- したがって `設定変更後CZスタート` はANALYSIS_SINGLE相当で保持し、メーカー公式確認なし。

carryOverBehavior:
- 据え置き時のCZ/RT状態、内部ポイント、1200Gカウンタの具体的引継ぎについて、機種固有の高信頼資料を確定できずUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみの場合のCZ/RT残G、内部ポイント、1200Gカウンタ処理はUNVERIFIED。

gameCounterReset:
- 通常時のボーナス天井は確認できない。
- 旧解析では `CZ終了後1200G` で再びCZへ入る周期性があり、設定変更後はCZスタートとされるため、設定変更時はこのCZ間ゲーム数カウンタが実質リセットされる挙動とみなせる。
- 据え置き/電断のみの1200Gカウンタ引継ぎはUNVERIFIED。

ceilingAfterReset:
- ボーナス当選天井ではなくCZ再突入のゲーム数条件として `1200G` が確認される。
- 設定変更後は即CZスタートのため、朝一は1200G待ちを経ずCZ恩恵を受ける。

modeAfterReset:
- 通常時の複数ゲーム数モードはNONE_CONFIRMED。
- 設定変更専用モードというよりCZ状態スタートとして扱う。

stateAfterReset:
- 設定変更後CZスタートは確認。
- CZ突入時の内部ポイント初期値、RTストック相当の扱い、前日ポイント持越しはUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- 設定変更後は内部CZスタートとされ、朝一からRT突入チャンスを得られることが主要恩恵。

resetPenalties:
- 設定変更で内部ポイント等が消去されるかはUNVERIFIEDであり、不利要素は確定できない。

resetDetection:
- 朝一CZ由来の挙動を利用した設定変更推測余地はある。
- 本機固有のガックン/リール初動による判別は再探索後もUNVERIFIED。

numericResetData:
- 設定変更後: CZスタート（定性的確認）。
- CZ終了後の通常時: 1200GでCZ再突入とする旧解析あり。
- リセット時RT突入率、朝一当選率、ポイント振り分け等の公開比較値はUNVERIFIED。

## sources

取得日: 2026-08-31

1. ユニバーサルエンターテインメント公式 — ラブリーチェリー
   - https://www.universal-777.com/product/slot/lovely_cherry/
   - 5号機、エレコ、2007年6月発売、BIG後CZ、プラムで33G RT、チェリーで通常、ポイント蓄積構造
   - reliability: OFFICIAL
2. ユニバーサルエンターテインメント公式 — 2007年製品一覧
   - https://www.universal-777.com/product/slot/2007/
   - ラブリーチェリー発売年月2007年6月
   - reliability: OFFICIAL
3. K-Navi — ラブリーチェリー
   - https://p-kn.com/slot/616/
   - 赤7/青7BIG確率、BIG合算、機械割
   - reliability: ANALYSIS_SINGLE
4. パチマガスロマガ旧 — モエるまりんバトる(ラブリーチェリー) ボーナス/機械割
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/68/h.php
   - BIG確率、赤7/青7詳細、シミュレートPAYOUT
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ旧 — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/68/a.php
   - 5号機/5ライン/3枚掛け、BIG460枚超払い出し終了、純増約360枚、CZ→RTループ
   - reliability: ANALYSIS_HIGH
6. スロ板blog — モエるまりんバトる旧テンプレ保存
   - https://slbl.blog.shinobi.jp/%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%EF%BC%9A%E3%81%BE%E8%A1%8C/%E3%83%A2%E3%82%A8%E3%82%8B%E3%81%BE%E3%82%8A%E3%82%93%E3%83%90%E3%83%88%E3%82%8B
   - 設定変更後CZ、CZ終了後1200GでCZ、33G RT、RT純増約1枚/G
   - reliability: OLD_ANALYSIS_SINGLE
7. P-WORLD旧掲示板ログ
   - https://www.p-world.co.jp/sp/search_kisyubbs.cgi?code=4484&group_id=2563&kisyu_id=4484&mode=articles&past_file_num=&thread_id=199
   - 当時ユーザー間で設定変更後CZスタート挙動が認識されていた補助材料
   - reliability: COMMUNITY_SUPPORT_ONLY
8. 5号機クロニクル — ユニバーサル系一覧
   - https://5goki.com/universal
   - 2007年6月、機械割98.1/102.8/109.0%の後年整理
   - reliability: RETROSPECTIVE_SUPPORT

## missingFields

- 50枚あたりゲーム数/ベース
- 据え置き時のCZ/RT/内部ポイント/1200Gカウンタ引継ぎ
- 電源OFF→ONのみのCZ/RT/内部ポイント/1200Gカウンタ処理
- 設定変更時の内部ポイント初期化/引継ぎ
- 本機固有のガックン判別
- 設定変更時RT突入率などの公開朝一数値
- ラブリーチェリー固有型式名の高信頼確認

## conflicts

1. 機械割: K-Navi `97.0/102.0/109.0%`、パチマガスロマガシミュレート `98.59/103.50/109.21%`、5号機クロニクル `98.1/102.8/109.0%`。平均化しない。
2. 後年整理資料の `BIG約344枚/REG約116枚` は、旧解析の赤7/青7BIGのみ・BIG純増約360枚という情報と整合しないため、別定義または混入可能性を含めCONFLICT_CAUTION。
3. 前handoffの2007-07-09候補に対し、メーカー公式は発売年月を2007年6月と明記。公式を優先し6月へ遡及登録。
